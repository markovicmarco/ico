import { useAddress } from "@thirdweb-dev/react";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from '../styles/Home.module.css'

function ClaimForm({ tokenDrop }) {
  const address = useAddress();
  const [amountToClaim, setAmountToClaim] = useState("");
  async function claim() {
    if (!amountToClaim || !address) {
      return;
    }

    try {
      const claimResult = await tokenDrop?.claim(amountToClaim);
      console.log("Claimed", claimResult);
      alert("Successfully claimed!");
    } catch (e) {
      console.error(e);
      alert(e);
    }
  }

  return (
    <>
      <InputGroup className={styles.input}>
      <div className={styles.grid}>
        <Form.Control style={{ color: 'white', background: 'black', border: '1px solid #252729', padding: '1.5rem', borderRadius: '5px 30px 35px 7.5px' }}
          placeholder="Enter amount to claim"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => setAmountToClaim(e.target.value)}
        />
        <Button onClick={claim} variant="primary" style={{ background: 'transparent', border: '#252729' }} id="button-addon2">
          Claim &rarr;
        </Button>
        </div>
      </InputGroup>
    </>
  );
}

export default ClaimForm;