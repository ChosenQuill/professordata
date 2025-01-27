import { test, expect } from 'vitest';
import { getCourseInfo, getProfessorAvg, getProfessorRating, getProfessors } from './data';

test('getProfessorRating not null', async () => {
    const res = await getProfessorRating("Jason Smith");
    expect(res).toBeDefined();
    expect(res!.firstName).equals('Jason');
    expect(res!.lastName).equals('Smith');
})

test('getProfessorAvg is valid', async () => {
    const res = await getProfessorAvg("Jason", "Smith");
    expect(res).toBeLessThan(100);
    expect(res).toBeGreaterThan(0);
});

test('getCourseInfo is valid', async () => {
    const res = await getCourseInfo("SE","3354");
    expect(res).toBeDefined();
    expect(res!.title).equals("Software Engineering");
});


test('getProfessors is valid', async () => {
    const res = await getProfessors("672f173b3e61da2b1e5a316c", "24F");
    console.log(res)
    expect(res).toBeDefined();
    expect(res![0]._id).not.toBeNull();
    expect(res![0].avgGrade).not.toBeNull();
    expect(res![0]?.rmp?.avgDifficulty).not.toBeNull();
}, 10000)


test('Grades is valid', async () => {
    const res = await getProfessorAvg("Mehra", "Borazjany")
    expect(res).toBeGreaterThanOrEqual(0);
    expect(res).toBeLessThanOrEqual(100);
})