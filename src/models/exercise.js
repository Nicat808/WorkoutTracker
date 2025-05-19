export class Exercise {
  constructor(name, mechanic, force, targetMuscles, image) {
    this.name = name; //Shoulder press
    this.mechanic = mechanic; //Compound
    this.force = force; //Push
    this.targetMuscles = [...targetMuscles]; // Shoulders,Triceps
    this.image = image; // Exercise image
  }
  getPrimaryMuscle() {
    return this.targetMuscles[0].generalName;
  }
}
