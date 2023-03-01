class userValidation {
  public static validationEmail(email: string): boolean {
    const validated = /\S+@\S+\.com\S/;
    return validated.test(email);
  }

  public static validationPassword(password: string): boolean {
    if (password.length > 6) {
      return true;
    } else {
      return false;
    }
  }

  public static validationUser(email: string, password: string): boolean {
    return this.validationEmail(email) && this.validationPassword(password);
  }
}

export default userValidation;
