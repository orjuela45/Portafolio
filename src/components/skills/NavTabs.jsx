import { LanguageContent } from "../language/LanguageContent"

export const NavTabs = ({tabs = [], id}) => {
  return (
    <ul className="nav nav-tabs mt-4" id={id} role="tablist">
      {
        tabs.map(tab =>  
          <li className="nav-item" role="presentation" key={tab.id}>
            <button className={`nav-link ${tab.selected && 'active'}`} id={tab.id} data-bs-toggle="tab" data-bs-target={`#${tab.target}`} type="button" role="tab" aria-controls={tab.target} aria-selected={tab.selected ? 'true': 'false'} >
              <LanguageContent contentID={tab.label} />
            </button>
          </li>
        )
      }
    </ul>
  )
}