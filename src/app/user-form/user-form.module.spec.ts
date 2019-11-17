import { UserFormModule } from './user-form.module';

describe('UserFormModule', () => {
  let userFormModule: UserFormModule;

  beforeEach(() => {
    userFormModule = new UserFormModule();
  });

  it('should create an instance', () => {
    expect(userFormModule).toBeTruthy();
  });
});
