---
slug: /jointech/jt802/configuration
id: jt802-configuration
sidebar_label: Configuration
title: Jointech - JT802 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Jointech JT802 for Plaspy with shared server settings and SMS APN commands for GPRS reporting to the Plaspy platform
keywords:
  - Jointech JT802 configuration
  - Jointech JT802 setup
  - JT802 Plaspy configuration
  - JT802 server configuration
  - Plaspy tracker setup
  - Jointech tracker configuration
  - JT802 GPS platform setup
  - fleet tracking JT802
  - JT802 valve lock configuration
  - Plaspy device configuration
---

# Jointech - JT802 Configuration

This page documents the public configuration context for using the Jointech JT802 valve slave lock with Plaspy. It focuses on the practical server settings and the manufacturer-provided SMS commands that are commonly used to point the unit to Plaspy for event and status reporting. The content is intended to help technical integrators and fleet engineers prepare the JT802 for use alongside GPS trackers and the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side steps can vary by firmware revision, vendor tools, and installation type. The JT802 configuration commonly uses SMS GPRS commands to set the APN and server endpoint; this page preserves the public command format and explains placeholders so you can adapt the steps to your site and firmware level.

## Configuration Overview

Configuring the JT802 for Plaspy prepares the device to report valve status, alarms, and timing events into the Plaspy platform so those events can be correlated with GPS tracker position feeds. The practical aim is to ensure the JT802 can reach the Plaspy server over GPRS and that any APN credentials are set correctly.

- Point the JT802 to the Plaspy server endpoint so events are delivered reliably to your account.
- Set the device APN and optional APN credentials so the unit can open a GPRS data session.
- Choose the transport (UDP or TCP) if required by the device firmware and network environment.
- Save and apply the configuration, then verify the JT802 is visible and reporting in Plaspy.
- Use the provided SMS command format to avoid manual menu navigation when configuring multiple units.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (device may be configured to use either)
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

## Typical Requirements Before Setup

- The JT802 must be powered and within GSM/GPRS coverage with an active SIM that supports data.
- Confirm the device ID (Tracker ID) for the unit you are configuring; SMS commands require the ID prefix.
- Access to the manufacturer configuration method for your unit, commonly SMS commands or official Jointech tools.
- Know the carrier APN for the SIM in the device and, if required, the APN username and password.
- An SMS-capable phone or management platform able to send configuration messages to the device number.

## How This Tracker Connects to Plaspy

The JT802 is configured to send valve lock status, alarm events, and timing information to the shared Plaspy server endpoint and port so those events can be correlated with GPS tracker position data and surfaced in Plaspy dashboards.

- The device is set to report to d.plaspy.com (or the Plaspy server IP) on port 8888.
- Reports and alarms reach Plaspy over either UDP or TCP based on the device transport setting.
- Plaspy detects the tracker protocol automatically and ingests the JT802 events for processing.
- Events from the JT802 are linked with fleet GPS telemetry to provide operational context and audit trails.
- Platform visibility enables alerting, route playback, and integration with fleet workflows.

## Common Configuration Workflow

1. Access the official Jointech configuration method for the JT802, typically SMS commands or Jointech configuration tools.
2. Prepare the device ID (tracker ID) and the carrier APN information for the SIM installed in the unit.
3. Enter the Plaspy server endpoint by using d.plaspy.com or the Plaspy server IP 54.85.159.138 as the destination.
4. Set the port to 8888 in the device configuration.
5. Choose UDP or TCP if the device requires an explicit transport selection.
6. Apply or save the configuration on the device and restart the unit if required by firmware.
7. Validate that the JT802 reports events and status to Plaspy and appears within the platform dashboards.

## Example Configuration Commands

To set the JT802 via SMS, use the manufacturer-provided SMS command format. The public commands below are the standard sequence used to set the GPRS server and, if required, APN credentials. Send each line as an SMS to the device phone number, prefixing commands with the device ID as shown.

- Instruction: include the device ID (Tracker ID) at the start of each SMS. Replace placeholders as noted below.

1) Set the GPRS server and APN (replace placeholders)
```
([trackerID],2,S02,129,1,54.85.159.138,8888,[apn])
```

2) (Optional) Set the APN username and password if your carrier requires them
```
([trackerID],2,S24,129,1,[apnu],[apnp])
```

Placeholders explained:
- [trackerID] — the device ID or IMEI prefix required by the JT802 SMS command format.
- [apn] — the carrier APN name for the SIM in the JT802.
- [apnu] — APN username if required by the carrier; omit if not needed.
- [apnp] — APN password if required by the carrier; omit if not needed.

Notes on usage:
- The example uses the Plaspy server IP 54.85.159.138 in the GPRS command. If your firmware or process accepts a domain, you can use d.plaspy.com where supported.
- Send the second command only when your APN requires authentication. The device may accept an empty username or password fields depending on firmware.

## Configuration Notes

- Firmware differences can affect the exact SMS syntax and parameter order; always confirm the command format for your JT802 firmware version.
- The JT802 supports SMS-based configuration as shown here; some deployments may prefer Jointech tools or provisioning systems where available.
- Choose TCP or UDP based on your network reliability and carrier behavior; UDP is common for low-overhead reporting, TCP may improve delivery reliability at the cost of session overhead.
- APN username and password commands are optional and should be used only when the mobile operator requires authentication.
- Plaspy uses the same port (8888) for all devices and will automatically detect the tracker protocol once the device is pointed to the Plaspy endpoint.

## Why Use Plaspy with This Configuration

Configuring the JT802 to report to Plaspy gives fleet operators consolidated visibility of valve events, alarm states, and timing information alongside GPS tracker position data. That combined view supports faster incident response, better audit trails for deliveries, and improved anti-theft workflows by tying valve activity to vehicle location.

To learn more about Plaspy and how it integrates with devices like the JT802 visit https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and official command references, verify details with the manufacturer at https://www.jointcontrols.com/ as hardware and firmware can change over time.
