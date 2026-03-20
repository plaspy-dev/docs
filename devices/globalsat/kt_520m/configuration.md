---
slug: /globalsat/kt_520m/configuration
id: kt_520m-configuration
sidebar_label: Configuration
title: GlobalSat - KT-520M Configuration
sidebar_class_name: menu_item_tracker
description: Configure the GlobalSat KT-520M for use with Plaspy using public server settings, SMS command examples, and practical setup guidance
keywords:
  - GlobalSat KT-520M
  - KT-520M configuration
  - GlobalSat tracker configuration
  - KT-520M Plaspy setup
  - GPS tracker configuration
  - LTE M tracker setup
  - Kineis satellite tracker
  - GPS platform setup
  - vehicle tracking configuration
  - fleet tracking device setup
---

# GlobalSat - KT-520M Configuration

This page documents the public configuration context for using the GlobalSat KT-520M with Plaspy. It summarizes the shared Plaspy server settings you will apply to the device, explains the end to end connection concept, and includes the publicly available SMS command templates extracted from the device provider content that are commonly used to point a KT-520M at Plaspy.

The KT-520M supports LTE‑M primary connectivity with Kineis satellite fallback, BLE local configuration and OTA, and long life battery operation. Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side steps can vary with firmware revision, hardware batch, installation type, and vendor configuration tools, so use this page as practical public guidance and verify device specific steps with the manufacturer documentation.

## Configuration Overview

The goal of the configuration process is to prepare the KT-520M to report position and telemetry to Plaspy and to validate that the device becomes visible in your Plaspy account. Configuration typically sets the server endpoint and port, the device APN settings if cellular is required, and any transport selection the device firmware asks for.

- Configure the device to send data to the Plaspy server endpoint so location and events arrive in Plaspy.
- Populate APN and SIM related fields if the KT-520M is operating on cellular LTE‑M.
- Choose the transport method supported by the device firmware and set the shared Plaspy port.
- Validate connectivity and confirm the tracker appears in Plaspy with the expected IMEI and telemetry.
- Optionally reboot the device after applying settings to ensure the new configuration is active.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- The device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Device powered and installed according to the manufacturer instructions so it can accept configuration commands.
- A valid cellular data SIM and correct APN values if using LTE‑M primary connectivity.
- The KT-520M IMEI value available for use in commands and for device registration in Plaspy.
- Access to the manufacturer supported configuration method such as SMS, BLE local configuration, or vendor software.
- Basic knowledge of whether the device firmware expects UDP or TCP transport when pointing to a remote server.
- A Plaspy account and access to your organization view to confirm the device reports after configuration.

## How This Tracker Connects to Plaspy

The KT-520M is configured to report GNSS coordinates, motion and tamper signals, and battery state to the shared Plaspy server endpoint and port so Plaspy can ingest telemetry and display the device in dashboards, trigger alerts, and include it in reports.

- Primary data transport over LTE‑M with Kineis satellite fallback where applicable for continuity.
- Device is pointed at d.plaspy.com or the IP 54.85.159.138 and uses port 8888 for all Plaspy devices.
- Transport can be UDP or TCP depending on the firmware setting; Plaspy supports both and detects the correct protocol.
- Plaspy receives telemetry, makes the device visible in the platform, and uses the data for location history, motion/tamper detection, and battery monitoring.
- After configuration and reporting, validate visibility in Plaspy by IMEI and by checking recent position updates.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the KT-520M. This may be BLE local tools, vendor configuration software, or SMS commands as documented by the manufacturer.
2. Enter the Plaspy server as either the domain d.plaspy.com or the IP 54.85.159.138 in the device server or remote host field.
3. Set the port value to 8888. All devices in Plaspy use the same port so use 8888 consistently.
4. Choose UDP or TCP if the device firmware requires selecting a transport protocol.
5. Add any required APN, username, and password placeholders for your SIM using the device configuration fields if cellular data is used.
6. Apply or save the configuration and reboot the device if the firmware or workflow requires a restart.
7. Validate that the device reports to Plaspy by locating it using the IMEI and confirming recent telemetry in your Plaspy account.

## Example Configuration Commands

The manufacturer provides public SMS command templates that can be used to set APN and server details and to reboot the device. The Plaspy framing example used by the device content is shown first. Replace placeholders where indicated.

- Framing example used in the device content
```
TSPRXAB27GHKLMnaicz*U!
```

- Primary setup command template
```
GSS,{{imei}},3,0,D1={{apn}},D2={{apnu}},D3={{apnp}},E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```
Explanation:
- {{imei}} is the device IMEI number.
- {{apn}} is the APN name for your cellular SIM.
- {{apnu}} is the APN username placeholder if required by the operator.
- {{apnp}} is the APN password placeholder if required by the operator.
- E0 sets the server IP to 54.85.159.138 and E1 sets the port to 8888 for Plaspy.
- The command includes a checksum placeholder {{checksum}} that must be calculated as described below.

- Reboot command template (optional restart after configuration)
```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```
Label: optional reboot step to apply settings if your workflow requires a device restart.

Checksum calculation (public algorithm excerpt from the manufacturer content):
- Compute the checksum by XORing the character codes of the command text up to but not including the asterisk character.
- Convert the resulting value to a two digit uppercase hexadecimal string and place it in the checksum placeholder.
- The provided manufacturer JavaScript example uses this approach to generate {{checksum}} and {{checksumreeboot}}.

Notes on using the commands:
- Maintain the exact ordering and punctuation from the templates when sending SMS to the device.
- Substitute your IMEI and APN placeholders before calculating the checksum.
- If you use domain d.plaspy.com instead of the IP, ensure the device firmware supports domain names in server fields; the examples above use the Plaspy IP 54.85.159.138 for clarity.

## Configuration Notes

- Firmware and hardware revisions may change the exact command syntax or supported fields; always confirm with the KT-520M manufacturer documentation for your unit.
- If the device firmware asks for a transport selection, choose UDP or TCP as required. Plaspy supports both and will detect the device protocol automatically.
- SMS based configuration is supported by the public templates shown above; BLE local configuration or vendor tools may offer alternate workflows with the same server and port values.
- When calculating checksums, be careful to include the exact command text up to the asterisk and to produce an uppercase two digit hex string.
- Use the Plaspy server values shown in this document to ensure consistent results across devices: d.plaspy.com or 54.85.159.138 and port 8888.

## Why Use Plaspy with This Configuration

Using the KT-520M with Plaspy provides a reliable way to combine rugged, long life asset tracking hardware with a shared server endpoint for centralized monitoring. Plaspy ingests GNSS location, motion and tamper events, and battery state from the KT-520M so operations teams can maintain visibility, create alerting workflows, and analyze historical movement for fleet and asset management.

To learn more about Plaspy visit https://www.plaspy.com and review the latest manufacturer configuration details at https://www.globalsat.com.tw/ to confirm device specific instructions and firmware behavior. Manufacturer specifications and setup methods can change over time so verify current information on the official GlobalSat site when performing configuration or deployment.
