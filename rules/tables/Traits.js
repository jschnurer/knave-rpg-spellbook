import React, { Fragment } from 'react';
import RulesTable from '../RulesTable';
import NumberCell from '../NumberCell';

const Traits = () =>
    <Fragment>
        <RulesTable
            headers={['Physique']}
            rows={[
                [
                    <NumberCell number="1" text="Athletic" />,
                    <NumberCell number="8" text="Ripped" />,
                    <NumberCell number="15" text="Statuesque" />,
                ], [
                    <NumberCell number="2" text="Brawny" />,
                    <NumberCell number="9" text="Rugged" />,
                    <NumberCell number="16" text="Stout" />,
                ], [
                    <NumberCell number="3" text="Corpulent" />,
                    <NumberCell number="10" text="Scrawny" />,
                    <NumberCell number="17" text="Tiny" />,
                ], [
                    <NumberCell number="4" text="Delicate" />,
                    <NumberCell number="11" text="Short" />,
                    <NumberCell number="18" text="Towering" />,
                ], [
                    <NumberCell number="5" text="Gaunt" />,
                    <NumberCell number="12" text="Sinewy" />,
                    <NumberCell number="19" text="Willowy" />,
                ], [
                    <NumberCell number="6" text="Hulking" />,
                    <NumberCell number="13" text="Slender" />,
                    <NumberCell number="20" text="Wiry" />,
                ], [
                    <NumberCell number="7" text="Lanky" />,
                    <NumberCell number="14" text="Flabby" />,
                ],
            ]}
        />
        <RulesTable
            headers={['Face']}
            rows={[
                [
                    <NumberCell number="1" text="Bloated" />,
                    <NumberCell number="8" text="Pinched" />,
                    <NumberCell number="15" text="Sunken" />,
                ], [
                    <NumberCell number="2" text="Blunt" />,
                    <NumberCell number="9" text="Hawkish" />,
                    <NumberCell number="16" text="Sharp" />,
                ], [
                    <NumberCell number="3" text="Bony" />,
                    <NumberCell number="10" text="Broken" />,
                    <NumberCell number="17" text="Soft" />,
                ], [
                    <NumberCell number="4" text="Chiseled" />,
                    <NumberCell number="11" text="Impish" />,
                    <NumberCell number="18" text="Square" />,
                ], [
                    <NumberCell number="5" text="Delicate" />,
                    <NumberCell number="12" text="Narrow" />,
                    <NumberCell number="19" text="Wide" />,
                ], [
                    <NumberCell number="6" text="Elongated" />,
                    <NumberCell number="13" text="Ratlike" />,
                    <NumberCell number="20" text="Wolfish" />,
                ], [
                    <NumberCell number="7" text="Patrician" />,
                    <NumberCell number="14" text="Round" />,
                ],
            ]}
        />
        <RulesTable
            headers={['Skin']}
            rows={[
                [
                    <NumberCell number="1" text="Battle Scar" />,
                    <NumberCell number="8" text="Perfect" />,
                    <NumberCell number="15" text="Sallow" />,
                ], [
                    <NumberCell number="2" text="Birthmark" />,
                    <NumberCell number="9" text="Pierced" />,
                    <NumberCell number="16" text="Sunburned" />,
                ], [
                    <NumberCell number="3" text="Burn Scar" />,
                    <NumberCell number="10" text="Pockmarked" />,
                    <NumberCell number="17" text="Tanned" />,
                ], [
                    <NumberCell number="4" text="Dark" />,
                    <NumberCell number="11" text="Reeking" />,
                    <NumberCell number="18" text="War Paint" />,
                ], [
                    <NumberCell number="5" text="Makeup" />,
                    <NumberCell number="12" text="Tattooed" />,
                    <NumberCell number="19" text="Weathered" />,
                ], [
                    <NumberCell number="6" text="Oily" />,
                    <NumberCell number="13" text="Rosy" />,
                    <NumberCell number="20" text="Whip Scar" />,
                ], [
                    <NumberCell number="7" text="Pale" />,
                    <NumberCell number="14" text="Rough" />,
                ],
            ]}
        />
        <RulesTable
            headers={['Hair']}
            rows={[
                [
                    <NumberCell number="1" text="Bald" />,
                    <NumberCell number="8" text="Filthy" />,
                    <NumberCell number="15" text="Oily" />,
                ], [
                    <NumberCell number="2" text="Braided" />,
                    <NumberCell number="9" text="Frizzy" />,
                    <NumberCell number="16" text="Ponytail" />,
                ], [
                    <NumberCell number="3" text="Bristly" />,
                    <NumberCell number="10" text="Greased" />,
                    <NumberCell number="17" text="Silky" />,
                ], [
                    <NumberCell number="4" text="Cropped" />,
                    <NumberCell number="11" text="Limp" />,
                    <NumberCell number="18" text="Topknot" />,
                ], [
                    <NumberCell number="5" text="Curly" />,
                    <NumberCell number="12" text="Long" />,
                    <NumberCell number="19" text="Wavy" />,
                ], [
                    <NumberCell number="6" text="Disheveled" />,
                    <NumberCell number="13" text="Luxurious" />,
                    <NumberCell number="20" text="Wispy" />,
                ], [
                    <NumberCell number="7" text="Deadlocks" />,
                    <NumberCell number="14" text="Mohawk" />,
                ],
            ]}
        />
        <RulesTable
            headers={['Clothing']}
            rows={[
                [
                    <NumberCell number="1" text="Antique" />,
                    <NumberCell number="8" text="Filthy" />,
                    <NumberCell number="15" text="Oversized" />,
                ], [
                    <NumberCell number="2" text="Bloody" />,
                    <NumberCell number="9" text="Flamboyant" />,
                    <NumberCell number="16" text="Patched" />,
                ], [
                    <NumberCell number="3" text="Ceremonial" />,
                    <NumberCell number="10" text="Stained" />,
                    <NumberCell number="17" text="Perfumed" />,
                ], [
                    <NumberCell number="4" text="Decorated" />,
                    <NumberCell number="11" text="Foreign" />,
                    <NumberCell number="18" text="Rancid" />,
                ], [
                    <NumberCell number="5" text="Eccentric" />,
                    <NumberCell number="12" text="Frayed" />,
                    <NumberCell number="19" text="Torn" />,
                ], [
                    <NumberCell number="6" text="Elegant" />,
                    <NumberCell number="13" text="Frumpy" />,
                    <NumberCell number="20" text="Undersized" />,
                ], [
                    <NumberCell number="7" text="Fashionable" />,
                    <NumberCell number="14" text="Livery" />,
                ],
            ]}
        />
        <RulesTable
            headers={['Virtue']}
            rows={[
                [
                    <NumberCell number="1" text="Ambitious" />,
                    <NumberCell number="8" text="Generous" />,
                    <NumberCell number="15" text="Loyal" />,
                ], [
                    <NumberCell number="2" text="Cautious" />,
                    <NumberCell number="9" text="Gregarious" />,
                    <NumberCell number="16" text="Merciful" />,
                ], [
                    <NumberCell number="3" text="Courageous" />,
                    <NumberCell number="10" text="Honest" />,
                    <NumberCell number="17" text="Righteous" />,
                ], [
                    <NumberCell number="4" text="Courteous" />,
                    <NumberCell number="11" text="Honorable" />,
                    <NumberCell number="18" text="Serene" />,
                ], [
                    <NumberCell number="5" text="Curious" />,
                    <NumberCell number="12" text="Humble" />,
                    <NumberCell number="19" text="Stoic" />,
                ], [
                    <NumberCell number="6" text="Disciplined" />,
                    <NumberCell number="13" text="Idealistic" />,
                    <NumberCell number="20" text="Tolerant" />,
                ], [
                    <NumberCell number="7" text="Focused" />,
                    <NumberCell number="14" text="Just" />,
                ],
            ]}
        />
        <RulesTable
            headers={['Vice']}
            rows={[
                [
                    <NumberCell number="1" text="Aggressive" />,
                    <NumberCell number="8" text="Gluttonous" />,
                    <NumberCell number="15" text="Rude" />,
                ], [
                    <NumberCell number="2" text="Arrogant" />,
                    <NumberCell number="9" text="Greedy" />,
                    <NumberCell number="16" text="Suspicious" />,
                ], [
                    <NumberCell number="3" text="Bitter" />,
                    <NumberCell number="10" text="Irascible" />,
                    <NumberCell number="17" text="Vain" />,
                ], [
                    <NumberCell number="4" text="Cowardly" />,
                    <NumberCell number="11" text="Lazy" />,
                    <NumberCell number="18" text="Vengeful" />,
                ], [
                    <NumberCell number="5" text="Cruel" />,
                    <NumberCell number="12" text="Nervous" />,
                    <NumberCell number="19" text="Wasteful" />,
                ], [
                    <NumberCell number="6" text="Deceitful" />,
                    <NumberCell number="13" text="Prejudiced" />,
                    <NumberCell number="20" text="Whiny" />,
                ], [
                    <NumberCell number="7" text="Flippant" />,
                    <NumberCell number="14" text="Reckless" />,
                ],
            ]}
        />
        <RulesTable
            headers={['Speech']}
            rows={[
                [
                    <NumberCell number="1" text="Blunt" />,
                    <NumberCell number="8" text="Formal" />,
                    <NumberCell number="15" text="Rapid-fire" />,
                ], [
                    <NumberCell number="2" text="Booming" />,
                    <NumberCell number="9" text="Gravelly" />,
                    <NumberCell number="16" text="Dialect" />,
                ], [
                    <NumberCell number="3" text="Breathy" />,
                    <NumberCell number="10" text="Hoarse" />,
                    <NumberCell number="17" text="Slow" />,
                ], [
                    <NumberCell number="4" text="Cryptic" />,
                    <NumberCell number="11" text="Mumbling" />,
                    <NumberCell number="18" text="Squeaky" />,
                ], [
                    <NumberCell number="5" text="Drawling" />,
                    <NumberCell number="12" text="Precise" />,
                    <NumberCell number="19" text="Stuttering" />,
                ], [
                    <NumberCell number="6" text="Droning" />,
                    <NumberCell number="13" text="Quaint" />,
                    <NumberCell number="20" text="Whispery" />,
                ], [
                    <NumberCell number="7" text="Flowery" />,
                    <NumberCell number="14" text="Rambling" />,
                ],
            ]}
        />
        <RulesTable
            headers={['Background']}
            rows={[
                [
                    <NumberCell number="1" text="Alchemist" />,
                    <NumberCell number="8" text="Cultist" />,
                    <NumberCell number="15" text="Outlaw" />,
                ], [
                    <NumberCell number="2" text="Beggar" />,
                    <NumberCell number="9" text="Gambler" />,
                    <NumberCell number="16" text="Performer" />,
                ], [
                    <NumberCell number="3" text="Butcher" />,
                    <NumberCell number="10" text="Herbalist" />,
                    <NumberCell number="17" text="Pickpocket" />,
                ], [
                    <NumberCell number="4" text="Burglar" />,
                    <NumberCell number="11" text="Magician" />,
                    <NumberCell number="18" text="Smuggler" />,
                ], [
                    <NumberCell number="5" text="Charlatan" />,
                    <NumberCell number="12" text="Mariner" />,
                    <NumberCell number="19" text="Student" />,
                ], [
                    <NumberCell number="6" text="Cleric" />,
                    <NumberCell number="13" text="Mercenary" />,
                    <NumberCell number="20" text="Tracker" />,
                ], [
                    <NumberCell number="7" text="Cook" />,
                    <NumberCell number="14" text="Merchant" />,
                ],
            ]}
        />
        <RulesTable
            headers={['Misfortunes']}
            rows={[
                [
                    <NumberCell number="1" text="Abandoned" />,
                    <NumberCell number="8" text="Discredited" />,
                    <NumberCell number="15" text="Poor" />,
                ], [
                    <NumberCell number="2" text="Addicted" />,
                    <NumberCell number="9" text="Disowned" />,
                    <NumberCell number="16" text="Perused" />,
                ], [
                    <NumberCell number="3" text="Blackmailed" />,
                    <NumberCell number="10" text="Exiled" />,
                    <NumberCell number="17" text="Rejected" />,
                ], [
                    <NumberCell number="4" text="Condemned" />,
                    <NumberCell number="11" text="Framed" />,
                    <NumberCell number="18" text="Replaced" />,
                ], [
                    <NumberCell number="5" text="Cursed" />,
                    <NumberCell number="12" text="Haunted" />,
                    <NumberCell number="19" text="Robbed" />,
                ], [
                    <NumberCell number="6" text="Defrauded" />,
                    <NumberCell number="13" text="Kidnapped" />,
                    <NumberCell number="20" text="Suspected" />,
                ], [
                    <NumberCell number="7" text="Demoted" />,
                    <NumberCell number="14" text="Mutilated" />,
                ],
            ]}
        />
    </Fragment>

export default Traits;