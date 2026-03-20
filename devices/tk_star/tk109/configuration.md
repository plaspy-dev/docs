---
slug: /tk_star/tk109/configuration
id: tk109-configuration
sidebar_label: Configuration
title: TK-Star - TK109 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TK-Star TK109 showing Plaspy server settings, SMS commands, APN placeholders, and setup workflow
keywords:
  - TK Star TK109 configuration
  - TK109 setup Plaspy
  - TK109 server configuration
  - TK109 GPS tracker setup
  - TK109 tracking software configuration
  - TK109 GPS platform setup
  - TK Star GPS tracker configuration
  - Plaspy device setup
  - GPS tracker configuration guide
  - TK109 APN settings
---

# TK-Star - TK109 Configuration

This page documents the public configuration context for using the TK-Star TK109 with Plaspy. It collects the shared Plaspy server values you will need, explains the practical steps and requirements for integrating the TK109, and reproduces the commonly used SMS configuration commands that are publicly available for this model.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use this guide to prepare the device for Plaspy and consult the TK‑Star documentation for any model-specific differences.

## Configuration Overview

The configuration process prepares the TK109 to communicate reliably with the Plaspy platform and ensures location and event data are received by your Plaspy account. Typical setup involves applying the correct APN values, pointing the tracker at the Plaspy server endpoint, and setting the desired reporting interval and transport mode.

- Configure the device APN, username, and password so the tracker can use cellular data for GPRS reporting.
- Set the GPRS server address and the Plaspy port so the device transmits telemetry to Plaspy.
- Choose UDP or TCP transport on the device if required, matching the tracked device's network behavior.
- Set an appropriate upload interval to balance location accuracy and battery usage.
- Validate the device is visible and reporting in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on the device where transport selection is required  
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged and powered TK109 unit with working cellular connectivity and a working SIM card that supports GPRS data and SMS (if using SMS-based configuration).  
- Access to the TK‑Star official configuration method such as SMS commands or the manufacturer manual.  
- Correct APN details from the SIM operator for mobile data; save APN placeholders such as [apn], [apnu], and [apnp] for use in SMS commands.  
- A way to send SMS messages to the tracker (phone or SMS gateway) if using SMS configuration.  
- Access to Plaspy account to confirm device visibility and to monitor incoming telemetry after setup.

## How This Tracker Connects to Plaspy

When configured correctly the TK109 reports location fixes and event notifications over cellular GPRS to the Plaspy server endpoint. Plaspy receives those messages on the shared port and automatically detects the device protocol so data is parsed and displayed in the platform.

- The tracker sends periodic GPRS uploads to the Plaspy server endpoint (d.plaspy.com or 54.85.159.138) on port 8888.  
- Transport can be UDP or TCP depending on device settings; Plaspy will accept either and detect the protocol.  
- Location updates and alarm events (for example SOS or vibration) are forwarded to Plaspy for real time monitoring.  
- Plaspy stores historical route data and exposes events and routes through the platform tools for review and reporting.  
- After configuration, verify the device appears and regularly updates in Plaspy to confirm operational status.

## Common Configuration Workflow

1. Access the official TK‑Star configuration method or documentation to confirm the SMS command format or manufacturer tool to use.  
2. Enter the Plaspy server domain d.plaspy.com or the IP address 54.85.159.138 into the device server settings.  
3. Set the device port to 8888 as Plaspy uses the same port for all supported devices.  
4. Choose UDP or TCP on the device if it asks for a transport protocol.  
5. Apply or save the configuration on the tracker (for SMS setups this means sending the SMS commands in the correct order).  
6. Restart or power cycle the device if required by the device firmware for new settings to take effect.  
7. Validate the device reports to Plaspy by confirming incoming positions and events in your Plaspy account.

## Example Configuration Commands

The TK109 can be configured using SMS commands. The following commands are taken from publicly available TK‑Star setup examples and use the default device password 123456. Keep the commands in the order shown when order matters for setup.

- Optional initial factory restore (use only when you need to reset the tracker to factory defaults):
```text
begin123456
```

- Set the operator APN (replace [apn] with your carrier APN):
```text
apn123456 [apn]
```

- Set the APN username (if required by your carrier; replace [apnu] with the APN username):
```text
apnuser123456 [apnu]
```

- Set the APN password (if required by your carrier; replace [apnp] with the APN password):
```text
apnpasswd123456 [apnp]
```

- Set the GPRS server to Plaspy using the Plaspy IP and port (this points the device at Plaspy):
```text
adminip123456 54.85.159.138 8888
```

- Set the upload interval to 60 seconds (adjust the interval value as needed):
```text
upload123456 60
```

- Switch the device to GPRS reporting mode:
```text
gprs123456
```

Notes on the commands and placeholders:
- The numeric password 123456 in these examples is the common default device password shown in public documentation. If your device password has been changed, use the current password in place of 123456.  
- [apn], [apnu], and [apnp] are placeholders for your SIM operator APN, username, and password. Replace them with your carrier values. If your operator does not require a username or password, the apnuser and apnpasswd commands are not required.  
- Use the adminip command to point directly to the Plaspy server IP and port; some installers prefer to use the server domain d.plaspy.com in TK‑Star tools where domain names are accepted. Both the domain and the IP point to Plaspy.

## Configuration Notes

- TK109 SMS based configuration is commonly used for field setup; verify your device accepts SMS commands and that the SIM can receive SMS.  
- Firmware versions and hardware revisions may change exact command behavior or supported command names; consult TK‑Star documentation for firmware specific differences.  
- Choose UDP or TCP based on your network environment or installer preference. Plaspy accepts either and auto detects the protocol on receive.  
- Using the server domain d.plaspy.com can simplify maintenance; using the IP 54.85.159.138 is an alternative if DNS is not available.  
- Always confirm the device reports to Plaspy after configuration and monitor the first few uploads to ensure correct parsing and event handling.

## Why Use Plaspy with This Configuration

Integrating the TK‑Star TK109 with Plaspy gives you centralized, real‑time visibility of location and event data from a compact, multi‑GNSS personal tracker. For caregivers, pet owners, and small asset monitoring, the combination of TK109 hardware and Plaspy platform provides straightforward reporting, alerting, and historical route access to help manage daily operations and incidents.

To learn more about Plaspy and how it supports device integrations like the TK109 visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and detailed TK‑Star documentation verify setup details at the manufacturer site https://www.tk-star.com/.
