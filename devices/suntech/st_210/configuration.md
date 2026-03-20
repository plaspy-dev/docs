---
slug: /suntech/st_210/configuration
id: st_210-configuration
sidebar_label: Configuration
title: Suntech - ST 210 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Suntech ST 210 to work with Plaspy using shared server settings and SMS commands for APN and reporting interval
keywords:
  - Suntech ST 210 configuration
  - Suntech ST 210 setup
  - Suntech GPS tracker configuration
  - ST 210 Plaspy setup
  - vehicle tracking configuration
  - fleet tracker setup
  - Suntech server configuration
  - tracker SMS configuration
  - GPRS tracker setup
  - GPS tracker platform configuration
---

# Suntech - ST 210 Configuration

This page documents the public configuration context for using the Suntech ST 210 tracker with Plaspy. It focuses on the practical, public-facing steps and settings needed to point an ST 210 at the Plaspy server and validate connectivity. Where useful, this page includes example SMS command templates extracted from public device configuration content.

Plaspy uses a single, shared server endpoint and port for supported trackers and automatically detects the device protocol. Manufacturer-side setup steps for the ST 210 can vary by firmware version, hardware revision, installation type, and vendor tool; consult the official Suntech documentation when you need device-specific procedures or latest command formats.

## Configuration Overview

Preparing the ST 210 for Plaspy primarily ensures the tracker can reach Plaspy over GPRS and report position and events reliably. The public configuration flow for this device often includes setting the operator APN and the GPRS server, assigning the device ID derived from the IMEI, and tuning reporting intervals so the unit appears and updates correctly in the Plaspy platform.

- Configure the device APN and GPRS server so the tracker can open a data connection to Plaspy.
- Assign and verify the tracker device ID which is derived from the IMEI for ST 210 SMS commands.
- Set a reporting interval that balances real time visibility and data use.
- Validate connectivity and server reachability so the device is visible in Plaspy.
- Use the provided SMS commands or manufacturer tools to apply settings when available.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP — the device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and installed Suntech ST 210 with access to its SIM slot and antenna connections as required by the installation.
- A GSM SIM card with an active data plan and correct APN credentials for the mobile operator.
- The device IMEI available; the ST 210 SMS configuration uses a device ID derived from the IMEI for command syntax.
- Access to the manufacturer configuration method you will use, typically SMS or a vendor configuration tool.
- Credentials or account access to Plaspy so you can validate the device after configuration.

## How This Tracker Connects to Plaspy

The ST 210 is configured to report positioning and event data to the shared Plaspy server endpoint and port. In practice, this means setting the tracker to use the operator APN for GPRS, pointing the GPRS server fields at Plaspy, and ensuring the chosen transport (UDP or TCP) and port are correct.

- The tracker opens a GPRS data connection using the operator APN and sends data to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy detects the device protocol automatically, so the platform can interpret messages without manual protocol selection on the server side.
- The tracker sends periodic position and event updates according to the configured reporting interval.
- Geo-fencing and input-triggered events reported by the ST 210 are forwarded to Plaspy when triggered.
- SMS can be used for configuration and verification commands if network data access is not yet available.

## Common Configuration Workflow

1. Access the official Suntech configuration method you will use, such as SMS commands or the vendor configuration tool supplied with the ST 210.
2. Determine the device ID used by the ST 210 SMS command format. For this model the device ID is the 6 digits from the IMEI starting at position 9 and ending at position 14 (the last digit of the IMEI is excluded). Example: IMEI 123456789012345 gives device ID 901234.
3. Enter the Plaspy server address either as domain d.plaspy.com or IP 54.85.159.138 in the GPRS server field.
4. Set the server port to 8888.
5. Choose UDP or TCP on the device if the ST 210 requires an explicit transport selection.
6. Apply or save the configuration and restart the device if required by the manufacturer instructions.
7. Validate that the device reports to Plaspy and appears in your Plaspy account, adjusting APN or reporting interval as needed.

## Example Configuration Commands

The ST 210 supports SMS-based configuration. The public command templates below are provided in the order they are typically applied. Replace placeholders before sending as SMS. The device ID placeholder {{device_id}} should be calculated from the IMEI as described above. Keep [apn], [apnu], and [apnp] as placeholders for your operator APN name, APN username, and APN password.

1) Set the operator APN and GPRS server (example template)

```
SA200NTW;{{device_id}};02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

- Purpose: Configure the operator APN and point the device to the Plaspy server IP and port.
- Notes: The fourth field in the original template indicates whether APN username/password are present. Use 1 if you provide [apnu] or [apnp], otherwise use 0.

2) Set the reporting interval to 60 seconds

```
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

- Purpose: Configure periodic reporting intervals. The example sets the reporting interval to 60 seconds for the relevant modes in the ST 210 command format.

3) Verify settings with a preset query

```
SA200CMD;{{device_id}};02;PresetA
```

- Purpose: Request current preset A configuration from the device to confirm settings.

Important placeholder explanations:
- {{device_id}} — the 6-digit device ID derived from IMEI as described above.
- [apn] — your mobile operator APN string.
- [apnu] — APN username if required by the operator.
- [apnp] — APN password if required by the operator.

Send these commands as SMS messages from an authorized phone number if your installation uses SMS configuration. Follow Suntech guidance for required command formatting, authorized sender numbers, and any PIN or security tokens if applicable.

## Configuration Notes

- Firmware differences and regional hardware revisions can change exact command formats or available parameters; always confirm with the device firmware release notes.
- The ST 210 supports SMS-based configuration as shown in public templates, but vendor tools or PC configuration software may also be available and can simplify batch setup.
- Choose UDP or TCP according to your installation preferences; both are supported by Plaspy on port 8888, and Plaspy will automatically detect the device protocol.
- Ensure your APN credentials are correct before pointing the tracker to d.plaspy.com or 54.85.159.138 to avoid connectivity failures.
- After applying settings, allow a short time for the device to register on the network and confirm visibility in Plaspy.

## Why Use Plaspy with This Configuration

Using Plaspy with the Suntech ST 210 provides a straightforward way to centralize vehicle location, event reporting, and operational monitoring. The ST 210's GPRS capability and event inputs combined with Plaspy's unified server endpoint make it practical to manage devices across fleets with consistent server settings.

To learn more about Plaspy and how it manages tracker integrations visit https://www.plaspy.com. For the most current device specific details, command syntax, and firmware notes verify the official Suntech documentation at http://www.suntechint.com/ as manufacturer specifications and setup methods can change over time.
