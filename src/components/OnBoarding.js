import { useState } from 'react'
const OnBoarding = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const handleInputChange = (event) => {
    event.preventDefault()
    setName(event.target.value)
  }
  const handleDateChange = (event) => {
    setDob(event.target.value);
  }
  return (
      <main>
          <div className="headerContainer">
            <section className="header">
                <h1>Start your Run-Prep today!</h1>
            </section>
            <section className="formOptions">
              <form>
                <label>Your Name</label>
                <input type="text" id="name" value={name} 
                  className="name" size={15} onChange={handleInputChange}
                  placeholder="Your name" required
                >
                </input>
                <label>Your Date of Birth</label>
                <input type="date" id="dob" value={dob} 
                  className="dob" size={15} onChange={handleDateChange}
                  placeholder="YYYY-MM-DD" required
                >
                </input>

              </form>
              
            </section>
          </div>
      </main>
  )
}

export default OnBoarding

