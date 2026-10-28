import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Habitspage.css'

function Habitspage(){

    const saveHabites = JSON.parse(localStorage.getItem("habits"))||[];

    const [habits,setHabits] = useState(saveHabites);
    const [habitname, sethabitName] = useState("");
    const [error, setError] = useState("");
    const [category, setCategory] = useState("Personal");
    const [frequency, setFrequency] = useState("Daily");
    const [search, setSearch] = useState("");
    const [filterCategory, setFilterCategory] = useState("All");
    const [filterStatus, setFilterStatus] = useState("All");
    const [filterFrequency, setFilterFrequency] = useState("All");
    const [sortBy, setSortBy] = useState("newest");
    const [deletedHabit, setDeletedHabit] = useState(null);
    const [toast, setToast] = useState("");


    useEffect(()=>{
        localStorage.setItem("habits",JSON.stringify(habits))
    },[habits]);

    const addHabit = ()=>{
        const HabitName = habitname.trim();
        if(HabitName === ""){
            setError("Habit name is required")
            return;
        }
        if(HabitName.length <3){
            setError("Habit name must be at least 3 characters");
            return;
        }
        else{
            setError("");
        }
        const newHabit={
            id: Date.now(),
            name: HabitName,
            completed: false,
            category: category,
            frequency: frequency,
            createdAt: new Date().toISOString(),
            completedDate: null
        };
        setHabits([...habits, newHabit]);
        sethabitName("");
        setCategory("Personal");
        setFrequency("Daily");
        setHabits([...habits, newHabit]);
        sethabitName("");
        setCategory("Personal");
        setFrequency("Daily");
        setToast("Habit added successfully!");
    }


    const deleteHabit = (id) => {
        const habitToDelete = habits.find((habit) => habit.id === id);

        if (!habitToDelete) return;
        setDeletedHabit(habitToDelete);
        setHabits((prevHabits) =>
        prevHabits.filter((habit) => habit.id !== id)
    );
};


    const toggleHabit = (id) => {
    const today = new Date().toISOString().split("T")[0];
    const updatedHabits = habits.map((habit) => habit.id === id?{...habit,
                completed: !habit.completed,
                completedDate: !habit.completed ? today : null,
              }:habit);

                setHabits(updatedHabits);
            };

    const totallHabits = habits.length;
    const finishedHabits = habits.filter((habit)=> habit.completed).length;
    const pendingHabits = totallHabits-finishedHabits;
    const filteredHabits = habits.filter((habit) => {
            const matchesSearch = habit.name
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesCategory =
                filterCategory === "All" ||
                (habit.category || "Personal") === filterCategory;

            const matchesStatus =
                filterStatus === "All" ||
                (filterStatus === "Completed"
                    ? habit.completed
                    : !habit.completed);

            const matchesFrequency =
                filterFrequency === "All" ||
                (habit.frequency || "Daily") === filterFrequency;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesStatus &&
                matchesFrequency
                );
    });


    const sortedHabits = [...filteredHabits].sort((a, b) => {
            if (sortBy === "newest") {
                return b.id - a.id;
            }

            if (sortBy === "oldest") {
                return a.id - b.id;
            }

            if (sortBy === "name") {
                return a.name.localeCompare(b.name);
            }

            return 0;
    });


    const undoDelete = ()=>{
        if (!deletedHabit) 
        return;
        setHabits((prevHabits) => [...prevHabits, deletedHabit]);
        setDeletedHabit(null);
    };
    return(
        <>
            <div className="habits-page">
                <header className="habits-header">
                    <h1>Habitly</h1>
                    <Link to="/">Back to Home</Link>
                </header>

                <main className="habits-container">
                    <div className="habits-title">
                        <h2>My Habits</h2>
                        <p>Build better habits, one day at a time</p>
                    </div>

                    <div className="habits-summery">
                        <div className="card">
                            <h3>Total Habits</h3>
                            <p>{totallHabits}</p>
                        </div>
                        <div className="card">
                            <h3>Finished Habits</h3>
                            <p>{finishedHabits}</p>
                        </div>
                        <div className="card">
                            <h3>Pending Habits</h3>
                            <p>{pendingHabits}</p>
                        </div>
                    </div>

                    <div className="habits-add">
                            <input type="text" placeholder="Enter a habit name..." value={habitname} onChange={(e)=>sethabitName(e.target.value)} onKeyDown={(e)=>{if(e.key === "Enter"){addHabit();}}} aria-invalid={Boolean(error)}/>
                            {error && <p className="form-error">{error}</p>}
                            <button onClick={addHabit}>Add habit</button>

                        <select value={category}onChange={(e) => setCategory(e.target.value)}>
                            <option value="Personal">Personal</option>
                            <option value="Health">Health</option>
                            <option value="Learning">Learning</option>
                            <option value="Work">Work</option>
                        </select>

                        <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                        </select>
                    </div>

                    <div className="habits-search">
                        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
                            <option value="All">All Categories</option>
                            <option value="Personal">Personal</option>
                            <option value="Health">Health</option>
                            <option value="Learning">Learning</option>
                            <option value="Work">Work</option>
                        </select>
                        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                            <option value="All">All Statuses</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Pending</option>
                        </select>
                        <select value={filterFrequency} onChange={(e) => setFilterFrequency(e.target.value)}>
                            <option value="All">All Frequencies</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                        </select>

                    </div>

                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                            <option value="name">Name (A–Z)</option>
                        </select>
                        {deletedHabit && (
                            <div className="undo-message">
                                <p>Habit deleted successfully!</p>
                                <button onClick={undoDelete}>Undo</button>
                            </div>
                        )}

                    <div className="habits-list">
                        {filteredHabits.length === 0 ? (
                            <p>No habits yet. Add your first habit!</p>
                        ) : (
                            sortedHabits.map((singlehabit)=>(
        
                        <div key={singlehabit.id} className={`habit-cards ${singlehabit.completed ? "completed" : ""}`}>
                            <div className="habit-info">
                                <h3>{singlehabit.name}</h3>
                                {singlehabit.completed && singlehabit.completedDate && (
                                    <p>Completed on: {singlehabit.completedDate}</p>
                                )}
                            </div>
                            <div className="habit-actions">
                                <button onClick={() => toggleHabit(singlehabit.id)}>
                                    {singlehabit.completed ? "Completed ✓" : "Mark as Done"}
                                </button>

                                <button onClick={() => deleteHabit(singlehabit.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                            ))
                        )}
                    </div>
                </main>
            </div>
            
        
        </>
    );
}

export default Habitspage;