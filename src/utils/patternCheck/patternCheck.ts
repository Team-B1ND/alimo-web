class PatternCheck {
  public categoryNameCheck(value: string): boolean {
    if (/[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/.test(value)) {
      return true;
    }
    return false;
  }
}

export default new PatternCheck();
