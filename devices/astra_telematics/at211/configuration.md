---
slug: /astra_telematics/at211/configuration
id: at211-configuration
sidebar_label: Configuration
title: Astra Telematics - AT211 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Astra Telematics AT211 for use with Plaspy including server settings, SMS commands, and setup workflow
keywords:
  - Astra Telematics AT211 configuration
  - AT211 setup for Plaspy
  - Astra AT211 server configuration
  - AT211 GPS tracker setup
  - AT211 SMS configuration
  - Astra Telematics GPS configuration
  - AT211 GPRS setup
  - AT211 tracking platform configuration
  - AT211 telemetry setup
  - AT211 fleet tracking configuration
---

# Astra Telematics - AT211 Configuration

This page documents the public configuration context for using the Astra Telematics AT211 with Plaspy. It focuses on the shared server settings and practical setup steps that enable the AT211 to report location and telemetry to the Plaspy platform. Where manufacturer-side commands or SMS setup are public, those examples are included to help you configure the device so it can be discovered and managed in Plaspy.

Plaspy uses shared server endpoints and a single port across supported devices and automatically detects the tracker protocol when a device connects. Manufacturer setup steps can vary by firmware version, hardware revision, installation type, or vendor tools; the AT211 may be configured via SMS commands or vendor configuration software, so always verify the final steps against Astra Telematics documentation for your firmware and hardware variant.

## Configuration Overview

The configuration prepares the AT211 to communicate reliably with Plaspy by setting the correct APN and server endpoint, and by confirming transport and connectivity. Public configuration actions commonly include setting the operator APN, supplying optional APN credentials, and pointing the device at the Plaspy server and port so the platform can receive location and event updates.

- Set the mobile operator APN and optional APN username and password so the tracker can establish GPRS data.
- Point the tracker to the Plaspy server endpoint so telemetry and GNSS fixes stream to the platform.
- Configure transport (UDP or TCP) and the common Plaspy port so the device can deliver packets successfully.
- Validate connectivity and that the device appears in Plaspy, then confirm event and location reporting.
- Use available manufacturer methods such as SMS commands or official configuration tools according to firmware guidance.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Note: Plaspy uses the same port for all supported devices and relies on automatic protocol detection to identify the tracker protocol.

## Typical Requirements Before Setup

- A powered AT211 installed or connected to a bench power supply and accessible for configuration.
- An active SIM card with a data plan and the correct operator APN for GPRS or LTE data.
- Access to Astra Telematics configuration methods for the AT211 such as SMS command support, vendor software, or an installer tool.
- Basic knowledge of the device's configuration interface (SMS syntax or configuration app) and any required APN credentials.
- A method to receive device responses during configuration, for example a phone to receive SMS replies or logs from the vendor tool.
- Confirmation of the device firmware version where possible, since commands and behavior can vary between firmware releases.

## How This Tracker Connects to Plaspy

When configured, the AT211 sends GNSS fixes and device telemetry to the Plaspy shared server endpoint and port so fleet managers can monitor assets in real time. The device uses the configured APN to establish a data session and then opens a TCP or UDP connection to the Plaspy endpoint to stream position, inputs, and event messages.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com (or the server IP 54.85.159.138) on port 8888.
- GNSS location and device telemetry are sent over GSM/GPRS or compatible cellular technologies to Plaspy.
- Events such as movement, input changes, or battery backup conditions are transmitted to the platform for alerting and reporting.
- Plaspy automatically detects the device protocol when the AT211 connects to the shared port so manual protocol selection in Plaspy is not required.
- Once reporting is validated, the device will appear in Plaspy and telemetry streams will be available for operational monitoring.

## Common Configuration Workflow

1. Access the official Astra Telematics configuration method for the AT211 (SMS commands, vendor app, or manufacturer tool) and confirm the device is reachable.
2. Set the operator APN on the device (and APN username/password if required) so the tracker can establish a GPRS/LTE data connection.
3. Enter the Plaspy server address by using either the domain d.plaspy.com or the server IP 54.85.159.138 as supported by the device.
4. Set the server port to 8888 and select UDP or TCP transport if the device requires explicit transport selection.
5. Apply or save the configuration according to the manufacturer process and restart the device if required by the firmware.
6. Validate connectivity by confirming the device establishes a session and that it reports to Plaspy; check the Plaspy platform for the tracker’s first reported position and status messages.
7. If reporting fails, review APN settings, SIM connectivity, and manufacturer logs or SMS responses to troubleshoot.

## Example Configuration Commands

The AT211 supports SMS-based configuration. The following public SMS commands are provided in the manufacturer guidance. Send each command as a standard text message to the device in the order shown when performing initial setup.

- Set the operator APN (replace [apn] with your operator APN):
```text
$APAD,[apn]
```

- (Optional) Set the APN username (replace [apnu] with the APN username):
```text
$APUN,[apnu]
```

- (Optional) Set the APN password (replace [apnp] with the APN password):
```text
$APPW,[apnp]
```

- Set the GPRS server to the Plaspy server IP:
```text
$IPAD,54.85.159.138
```

- Set the server port to the Plaspy port:
```text
$PORT,8888
```

Notes on placeholders:
- [apn] is the operator APN string provided by your mobile provider.
- [apnu] is the APN username when the carrier requires one.
- [apnp] is the APN password when the carrier requires one.

If your installation requires selecting UDP or TCP and the AT211 firmware requires an explicit transport command, use the manufacturer tool or SMS syntax provided by Astra Telematics to select the transport. Those transport commands are not part of the public SMS command set shown above; consult official Astra documentation for transport-specific syntax.

## Configuration Notes

- Firmware and hardware revisions can change available commands and behavior; always verify commands against the AT211 firmware version supplied with your device.
- SMS-based configuration is a public method for the AT211, but vendor tools or a wired connection (DB9) may also be available depending on your installer kit and firmware.
- Choose UDP or TCP based on network conditions and installer preference; Plaspy accepts either on port 8888 but the tracker configuration must match that choice.
- APN credentials are operator specific; if your SIM requires a username or password, set [apnu] and [apnp] as shown.
- Plaspy uses the same port for all supported devices and automatically detects the protocol when the device connects, simplifying platform-side configuration.

## Why Use Plaspy with This Configuration

Configuring the Astra Telematics AT211 to report to Plaspy provides a straightforward path to real-time location, telemetry, and event monitoring for plant and machinery. With the shared Plaspy endpoint and port, and automatic protocol detection, integrating the AT211 into fleet monitoring workflows is primarily an exercise in ensuring correct APN and server settings on the device and validating that the device appears in the platform.

To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For the most current device-specific configuration methods, firmware details, and manufacturer guidance for the AT211, please verify information with Astra Telematics at https://astratelematics.com/.
