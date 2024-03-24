import { Controller } from "@hotwired/stimulus"
import { Modal } from "bootstrap"

// Connects to data-controller="modal"
export default class extends Controller {
  connect() {
    this.modal = new Modal(this.element)

    this.modal.show()
  }

  close(event) {
    // event.detail(=レスポンス)が成功（200）ならモーダル閉じる
    // それ以外なら（=バリデーション失敗）ならモーダル閉じない
    if (event.detail.success) {
      this.modal.hide()
    }
  }
}
