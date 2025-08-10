import Message from "../../chat/Message";

export default function ChatHistory() {
  return (
    <div className="chat-page chat-history  m-0 ">
      <div className="chat-window">
        <div className="chat-window__header">
          <div className="chat-window__info">
            <h4 className="chat-window__name">سجل المحادثات</h4>
          </div>
        </div>
        <div className="chat-window__messages">
          <Message
            from="other"
            text="مرحبًا جون، أاريد الاستفسار عن الاشتراكات. هل يمكنك مساعدتي؟ 😕"
            time="10:02 ص"
            avatar="https://avatar.iran.liara.run/public/1"
          />
          <Message
            from="self"
            text="كيف يمكننا المساعدة؟ نحن هنا من أجلك! 😄"
            time="10:00 ص"
            avatar="https://avatar.iran.liara.run/public/42"
          />
          <Message
            from="self"
            text=" يحتوي تسامي على جميع المكونات التي ستحتاجها لتحقيق اهدافك."
            avatar="https://avatar.iran.liara.run/public/42"
          />
          <Message
            from="other"
            text=" يحتوي تسامي على جميع المكونات التي ستحتاجها لتحقيق اهدافك."
            avatar="https://avatar.iran.liara.run/public/1"
          />
          <Message
            from="self"
            text=" يحتوي تسامي على جميع المكونات التي ستحتاجها لتحقيق اهدافك."
            avatar="https://avatar.iran.liara.run/public/42"
          />
          <Message
            from="self"
            text=" يحتوي تسامي على جميع المكونات التي ستحتاجها لتحقيق اهدافك."
            avatar="https://avatar.iran.liara.run/public/42"
          />
          <Message
            from="other"
            text=" يحتوي تسامي على جميع المكونات التي ستحتاجها لتحقيق اهدافك."
            avatar="https://avatar.iran.liara.run/public/1"
          />
          <Message
            from="self"
            text=" يحتوي تسامي على جميع المكونات التي ستحتاجها لتحقيق اهدافك."
            avatar="https://avatar.iran.liara.run/public/42"
          />
          <Message
            from="self"
            text=" يحتوي تسامي على جميع المكونات التي ستحتاجها لتحقيق اهدافك."
            avatar="https://avatar.iran.liara.run/public/42"
          />
          <Message
            from="self"
            text=" يحتوي تسامي على جميع المكونات التي ستحتاجها لتحقيق اهدافك."
            avatar="https://avatar.iran.liara.run/public/42"
          />
          <Message
            from="self"
            text=" يحتوي تسامي على جميع المكونات التي ستحتاجها لتحقيق اهدافك."
            avatar="https://avatar.iran.liara.run/public/42"
          />
          <Message
            from="self"
            text=" يحتوي تسامي على جميع المكونات التي ستحتاجها لتحقيق اهدافك."
            avatar="https://avatar.iran.liara.run/public/42"
          />
          <Message
            from="self"
            text=" يحتوي تسامي على جميع المكونات التي ستحتاجها لتحقيق اهدافك."
            avatar="https://avatar.iran.liara.run/public/42"
          />
          <Message
            from="self"
            text=" يحتوي تسامي على جميع المكونات التي ستحتاجها لتحقيق اهدافك."
            avatar="https://avatar.iran.liara.run/public/42"
          />
          <Message
            from="self"
            text=" يحتوي تسامي على جميع المكونات التي ستحتاجها لتحقيق اهدافك."
            avatar="https://avatar.iran.liara.run/public/42"
          />
          <Message
            from="self"
            text=" يحتوي تسامي على جميع المكونات التي ستحتاجها لتحقيق اهدافك."
            avatar="https://avatar.iran.liara.run/public/42"
          />
          <Message
            from="self"
            text=" يحتوي تسامي على جميع المكونات التي ستحتاجها لتحقيق اهدافك."
            avatar="https://avatar.iran.liara.run/public/42"
          />
        </div>

        <footer className="chat-window__footer">
          <input type="text" placeholder="اكتب رسالتك هنا..." />
          <button>
            <i className="fa-solid fa-microphone"></i>
          </button>
          <button>
            <i className="fa-solid fa-paperclip-vertical"></i>
          </button>
          <button className="chat-window__footer--send">
            <i className="fa-solid fa-paper-plane"></i>
            <span>إرسال</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
