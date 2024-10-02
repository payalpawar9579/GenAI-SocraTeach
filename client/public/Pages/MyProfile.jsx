import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const MyProfile = () => {
  const [username, setUsername] = useState('Raj');
  const [fullName, setFullName] = useState('Raj Kumar');
  const [email, setEmail] = useState('raj@gmail.com');
  const [bio, setBio] = useState('Passionate about coding and technology.');
  const [programmingLanguages, setProgrammingLanguages] = useState(['Python', 'JavaScript', 'Java']);
  const [frameworks, setFrameworks] = useState(['React', 'Node.js']);
  const [tools, setTools] = useState(['Git', 'Docker']);
  const [areasOfInterest, setAreasOfInterest] = useState(['Web Development', 'Machine Learning']);
  const [portfolio, setPortfolio] = useState([{ name: 'Project A', link: '#' }, { name: 'Project B', link: '#' }]);
  const [githubLink, setGithubLink] = useState('https://github.com/johndoe');
  const [openSourceContributions, setOpenSourceContributions] = useState('Contributed to XYZ project');
  const [institutionName, setInstitutionName] = useState('Colorado University');
  const [degree, setDegree] = useState('B.Sc. in Computer Science');
  const [certifications, setCertifications] = useState(['AWS Certified Developer']);
  
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    if (!username || !fullName || !email.includes('@') || !bio) {
      setErrorMessage('Please fill in all fields correctly.');
      return;
    }
    setIsEditing(false);
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center text-white p-6"
         style={{
           backgroundImage: `url(/Images/bg.png)`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
         }}>
      <h1 className="text-4xl font-bold mb-4 text-[#545BFF]">My Profile</h1>

      <div className="bg-black bg-opacity-80 p-6 rounded-lg shadow-lg w-full max-w-2xl mb-6">
        {isEditing ? (
          <form onSubmit={handleProfileUpdate}>
            {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'Username:', value: username, setter: setUsername, type: 'text' },
                { label: 'Full Name:', value: fullName, setter: setFullName, type: 'text' },
                { label: 'Email:', value: email, setter: setEmail, type: 'email' },
                { label: 'Bio:', value: bio, setter: setBio, type: 'textarea' },
                { label: 'Programming Languages:', value: programmingLanguages.join(', '), setter: (e) => setProgrammingLanguages(e.target.value.split(',').map(lang => lang.trim())), type: 'text' },
                { label: 'Frameworks and Libraries:', value: frameworks.join(', '), setter: (e) => setFrameworks(e.target.value.split(',').map(lib => lib.trim())), type: 'text' },
                { label: 'Tools and Technologies:', value: tools.join(', '), setter: (e) => setTools(e.target.value.split(',').map(tool => tool.trim())), type: 'text' },
                { label: 'Areas of Interest:', value: areasOfInterest.join(', '), setter: (e) => setAreasOfInterest(e.target.value.split(',').map(area => area.trim())), type: 'text' },
                { label: 'Portfolio Links:', value: portfolio.map(project => project.link).join(', '), setter: (e) => setPortfolio(e.target.value.split(',').map(link => ({ name: 'New Project', link: link.trim() }))), type: 'text' },
                { label: 'GitHub Profile Link:', value: githubLink, setter: setGithubLink, type: 'text' },
                { label: 'Open Source Contributions:', value: openSourceContributions, setter: setOpenSourceContributions, type: 'textarea' },
                { label: 'Institution Name:', value: institutionName, setter: setInstitutionName, type: 'text' },
                { label: 'Degree:', value: degree, setter: setDegree, type: 'text' },
                { label: 'Certifications:', value: certifications.join(', '), setter: (e) => setCertifications(e.target.value.split(',').map(cert => cert.trim())), type: 'text' }
              ].map(({ label, value, setter, type }, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-sm mb-1">{label}</label>
                  {type === 'textarea' ? (
                    <textarea
                      rows="4"
                      value={value}
                      onChange={setter}
                      className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-[#545BFF]"
                    />
                  ) : (
                    <input
                      type={type}
                      value={value}
                      onChange={setter}
                      className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-[#545BFF]"
                    />
                  )}
                </div>
              ))}
            </div>

            <button type="submit" className="bg-[#545BFF] text-white px-4 py-2 rounded-lg hover:bg-[#4752c4] transition duration-200">Save Changes</button>
          </form>
        ) : (
          <div>
            <h2 className="text-2xl mb-2">{fullName} ({username})</h2>
            <p className="mb-2"><strong>Email:</strong> {email}</p>
            <p className="mb-2"><strong>Bio:</strong> {bio}</p>
            
            {/* Skills Section */}
            <div className="bg-gray-800 bg-opacity-80 p-4 rounded-lg mb-4">
              <h3 className="text-xl mb-2">Skills</h3>
              <p><strong>Languages:</strong> {programmingLanguages.join(', ')}</p>
              <p><strong>Frameworks:</strong> {frameworks.join(', ')}</p>
              <p><strong>Tools:</strong> {tools.join(', ')}</p>
              <p><strong>Areas of Interest:</strong> {areasOfInterest.join(', ')}</p>
            </div>

            {/* Education Section */}
            <div className="bg-gray-800 bg-opacity-80 p-4 rounded-lg mb-4">
              <h3 className="text-xl mb-2">Education</h3>
              <p><strong>Institution:</strong> {institutionName}</p>
              <p><strong>Degree:</strong> {degree}</p>
              <p><strong>Certifications:</strong> {certifications.join(', ')}</p>
            </div>

            {/* Projects Section */}
            <div className="bg-gray-800 bg-opacity-80 p-4 rounded-lg mb-4">
              <h3 className="text-xl mt-4">Projects</h3>
              <ul className="list-disc pl-5 mb-4">
                {portfolio.map((project, index) => (
                  <li key={index}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#545BFF] hover:underline">{project.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* GitHub Section */}
            <div className="bg-gray-800 bg-opacity-80 p-4 rounded-lg mb-4">
              <p><strong>GitHub:</strong> <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-[#545BFF] hover:underline">{githubLink}</a></p>
              <p><strong>Open Source Contributions:</strong> {openSourceContributions}</p>
            </div>

            <button onClick={handleEditToggle} className="flex items-center text-[#545BFF] hover:underline mt-4">
              <FaEdit className="mr-1" /> Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
