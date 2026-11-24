
const Student = (Props ) => {
   function outside()
   {
    console.log(Props.name+"יצאת בשעה:"+new Date().toLocaleTimeString())
    {Props.b()}
   }

  return (
   <div>
    <h3>{Props.id}</h3>
     <h3>{Props.name}</h3>
      <h3>{Props.age}</h3>
       <h3>{Props.average}</h3>
       {Props.average > 90 && <h3>תלמיד מצטיין</h3>}
       {Props.average < 60 && <h3>טעון שיפור </h3>}
       <button onClick={outside}>"יציאה מבית הספר"</button>
   </div>
  )
}

export default Student