---
slug: /globalsat/lt_520az/configuration
id: lt_520az-configuration
sidebar_label: Configuration
title: GlobalSat - LT-520AZ Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the GlobalSat LT-520AZ and how to point the tracker to Plaspy using shared server settings and SMS commands
keywords:
  - GlobalSat LT-520AZ configuration
  - LT-520AZ Plaspy setup
  - GlobalSat tracker configuration
  - LT-520AZ SMS configuration
  - Plaspy server configuration
  - LT-520AZ Amazon Sidewalk
  - LT-520AZ BLE GNSS
  - fleet tracking LT-520AZ
  - asset tracking LT-520AZ
  - LT-520AZ setup guide
---

# GlobalSat - LT-520AZ Configuration

This page documents the public configuration context for using the GlobalSat LT-520AZ tracker with Plaspy. It explains the practical server settings and the published SMS command format shown by the device vendor to point the tracker to Plaspy. Use this guide to prepare the device for communication with Plaspy and to understand what values the platform expects.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side steps for configuration may vary by firmware, hardware revision, installation type, and vendor tools. Where the LT-520AZ provides SMS-based commands, this guide preserves the vendor-provided command format and explains placeholders and checksum calculation so you can apply the public setup steps consistently.

## Configuration Overview

This configuration process prepares the LT-520AZ to send its location, motion, and telemetry to Plaspy so the device becomes visible and manageable in the platform. The vendor-supplied SMS command format can be used to program server endpoint and related parameters from a phone or SMS gateway.

- Point the device to Plaspy's shared server endpoint so the tracker reports directly into the Plaspy platform.
- Populate any required fields such as IMEI and configuration placeholders and compute the command checksum.
- Choose transport (UDP or TCP) and the shared port to match Plaspy's server settings.
- Save and apply the configuration and restart the tracker if required to begin reporting.
- Validate connectivity and visibility in Plaspy by confirming the device appears and sends telemetry.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol for supported devices

These values are the public shared settings you should use when configuring the LT-520AZ for Plaspy. Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically.

## Typical Requirements Before Setup

- Reliable power to the tracker and access to the device IMEI for configuration.
- Access to the official GlobalSat configuration method or vendor-supplied SMS commands or tools.
- An ability to send SMS commands from a phone or SMS gateway if using the SMS configuration method shown in vendor content.
- Knowledge of any APN fields the vendor command accepts; placeholders are preserved in the example commands below.
- A testing environment or spare device to validate settings before wide deployment.
- Access to firmware and documentation from the manufacturer to confirm any device-specific details or firmware differences.

## How This Tracker Connects to Plaspy

The LT-520AZ is configured to report its GNSS, BLE-assisted detections, accelerometer-driven motion events, and battery state to Plaspy by pointing the tracker at the Plaspy server endpoint and port. Once configured, Plaspy ingests those reports and provides live maps, alerts, and historical reporting.

- The device is configured to report to the shared Plaspy server endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888).
- Transport can be UDP or TCP depending on the device configuration interface or SMS command options.
- Plaspy automatically detects the tracker protocol so the platform can parse incoming telemetry from the LT-520AZ.
- Once reporting, Plaspy aggregates the device's location and motion telemetry into dashboards, geofences, and alerts.
- Validate connectivity by confirming the tracker appears in Plaspy and sends periodic updates.

## Common Configuration Workflow

1. Access the official GlobalSat configuration method or software for the LT-520AZ, or use the vendor-provided SMS command format if supported.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138 as the device accepts.
3. Set the port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration using the manufacturer tool or by sending the proper SMS command.
6. Restart or reboot the device if the configuration method requires it to activate the new settings.
7. Validate that the device reports to Plaspy by checking device connectivity and recent telemetry in the Plaspy platform.

## Example Configuration Commands

The vendor-provided public commands for the LT-520AZ are delivered by SMS. The published format and example commands below are converted from the manufacturer's page into a clean, reproducible form. Preserve placeholders exactly and replace them with your values before sending.

Format used by Plaspy
TSPRXAB27GHKLMnaicz*U!

Setup command (replace placeholders and compute checksum before sending):
- Replace {{imei}} with the device IMEI.
- Replace {{apn}}, {{apnu}}, {{apnp}} with APN, APN username, and APN password if required by your device configuration. For devices using Amazon Sidewalk exclusively, APN fields may be unused or ignored; verify with the manufacturer.
- Compute {{checksum}} as the XOR checksum of the command characters from the start of the inner command up to but not including the '*' character, expressed as an uppercase two-digit hexadecimal value.

Example setup SMS command:
```
GSS,{{imei}},3,0,D1={{apn}},D2={{apnu}},D3={{apnp}},E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

Optional reboot command (use when the device documentation indicates a reboot is required or recommended):
```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Checksum calculation
- The checksum is calculated by XORing the ASCII codes of every character in the command string from the first character up to the character immediately before the '*' character.
- Convert the resulting numeric checksum to an uppercase hexadecimal string with two characters (pad with leading zero if needed). Insert that value in place of {{checksum}} or {{checksumreeboot}}.
- Manufacturer pages often include a small script to compute this checksum automatically; the algorithm is the single-byte XOR over the characters described above.

Notes about placeholders
- {{imei}} — device IMEI number, required to address the specific tracker.
- {{apn}} — APN name placeholder; include only if your installation and device configuration require APN values.
- {{apnu}} — APN username placeholder.
- {{apnp}} — APN password placeholder.

Always verify the exact SMS command syntax and checksum method from the official GlobalSat documentation before sending commands in production.

## Configuration Notes

- The vendor command format above uses SMS-based configuration; confirm that SMS programming is supported and enabled on your tracker batch and firmware.
- Firmware revisions and manufacturing variants can change the exact command syntax and checksum expectations; check the GlobalSat documentation for your device revision.
- Plaspy accepts reports on the shared server endpoint and uses port 8888 across all supported devices; choose UDP or TCP per device capability and network considerations.
- If the tracker supports both IP and domain server entries, you can use either d.plaspy.com or 54.85.159.138 as appropriate for your configuration interface.
- Perform testing after configuration to ensure telemetry is parsed correctly and the device appears in Plaspy as expected.

## Why Use Plaspy with This Configuration

Using the LT-520AZ with Plaspy provides a practical path to integrate robust long-life asset tracking into a fleet or asset monitoring workflow. Pointing the device to Plaspy's shared server settings lets the platform collect location, motion, and battery telemetry so teams can monitor assets, receive alerts, and analyze historical movement without bespoke server configuration.

To learn more about Plaspy and how it can manage LT-520AZ devices at scale, visit https://www.plaspy.com. For the most current device-specific configuration methods, firmware behavior, and manufacturer details verify the official documentation at https://www.globalsat.com.tw/ as manufacturer guidance may change over time.
