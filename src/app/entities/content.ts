export class Content {
  static create(arg0: string) {
    throw new Error('Method not implemented.');
  }
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validadeContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 255;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validadeContentLength(content);

    if (!isContentLengthValid) {
      throw new Error('Content must be between 5 and 255 characters');
    }

    this.content = content;
  }
}
