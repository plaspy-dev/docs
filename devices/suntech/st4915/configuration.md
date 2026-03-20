---
slug: /suntech/st4915/configuration
id: st4915-configuration
sidebar_label: Configuration
title: Suntech - ST4915 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Suntech ST4915 GPS tracker integration with Plaspy including server settings and example SMS commands
keywords:
  - Suntech ST4915 configuration
  - Suntech ST4915 setup
  - ST4915 Plaspy integration
  - ST4915 GPS tracker configuration
  - Suntech tracker server settings
  - ST4915 SMS configuration
  - asset tracker configuration guide
  - fleet management tracker setup
  - ST4915 telemetry setup
  - long life battery tracker configuration
---

# Suntech - ST4915 Configuration

This page documents the public, practical configuration information for using the Suntech ST4915 series with Plaspy. It focuses on the server endpoint and the typical manufacturer-side commands and workflow that are publicly available for configuring the ST4915 to report into Plaspy for real-time tracking and telemetry.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The ST4915 model can be configured using SMS commands as shown below, and this page uses that public content as the main grounding for the setup examples.

## Configuration Overview

This configuration process prepares the ST4915 to communicate with Plaspy by pointing the device at Plaspy's shared server endpoint, setting the transport and reporting parameters, and validating that position and telemetry packets reach the platform.

- Configure the device network settings so it reports to Plaspy's server endpoint.
- Provide the device ID derived from the IMEI so the manufacturer commands apply to the correct unit.
- Set the operator APN and any required credentials for cellular data connectivity.
- Configure reporting intervals and behavior to balance battery life and update frequency.
- Verify configuration with the device using the manufacturer's check command and confirm visibility in Plaspy.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Protocol handling: Plaspy automatically detects the tracker protocol when the device sends data

## Typical Requirements Before Setup

- Device IMEI available (used to derive the device ID required by the ST4915 SMS commands).  
- An active SIM with data and SMS capability installed in the tracker and a known operator APN.  
- Ability to send SMS messages to the device for SMS-based configuration or access to the manufacturer's configuration tool if available.  
- Access to Plaspy account or administrative access so you can confirm the device appears and reporting is correct.  
- Basic knowledge of the ST4915 setup flow and any vendor-provided documentation or tools for your hardware revision.

## How This Tracker Connects to Plaspy

The ST4915 is configured to report GNSS positions and telemetry to Plaspy by sending data to the shared Plaspy server endpoint and port. Once the device is pointed at d.plaspy.com (or the Plaspy server IP) on port 8888, Plaspy ingests the messages and maps them to your account using the device identity.

- The tracker sends location and telemetry packets to d.plaspy.com or 54.85.159.138 on port 8888.  
- Plaspy automatically detects the tracker protocol so no protocol selection is required on the server side.  
- The device can use either TCP or UDP transport on port 8888 depending on configuration choices on the tracker.  
- Reporting intervals configured on the device determine update frequency and battery impact; Plaspy receives and displays these updates.  
- Device events such as motion or input changes are forwarded to Plaspy for alerts and dashboarding.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software (for ST4915 this commonly includes SMS command provisioning or vendor tools).  
2. Derive the device ID from the device IMEI (see Example Configuration Commands below) and prepare any APN credentials.  
3. Enter d.plaspy.com or 54.85.159.138 as the GPRS server address in the device configuration.  
4. Set the server port to 8888 (Plaspy uses the same port for all supported devices).  
5. Choose UDP or TCP on the device if it requires a transport selection.  
6. Apply or save the configuration on the device and restart the device if the hardware or firmware requires a reboot for settings to take effect.  
7. Validate that the device reports to Plaspy and that positions and events appear in your Plaspy account.

## Example Configuration Commands

The ST4915 public configuration content shows SMS-based commands. The manufacturer uses a device ID derived from the IMEI (the six digits before the IMEI check digit). Example derivation: if the IMEI is 123456789012345 the device ID is the six digits in positions 9–14 (901234 in the example shown by the manufacturer). Use that device ID in the commands below where {{device_id}} appears.

Notes on placeholders:
- {{device_id}} — the device ID derived from IMEI as described above.  
- [apn] — the operator APN string required for the SIM data connection.  
- [apnu] — APN username if the operator requires one (keep placeholder if required).  
- [apnp] — APN password if the operator requires one (keep placeholder if required).  
- The SA200NTW command contains a flag that should be 1 if APN username or password are provided, otherwise 0.

1) Set the operator APN and GPRS server (replace placeholders as needed):

```text
SA200NTW;{{device_id}};02;[0 or 1];[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

- Replace [0 or 1] with 1 if you supply [apnu] or [apnp], otherwise 0.  
- This command points the tracker to Plaspy at 54.85.159.138 on port 8888 (same port used for all Plaspy devices). You may also use d.plaspy.com in place of the IP if supported by your SMS command syntax or configuration tool.

2) Set the update/reporting interval to 60 seconds (example for frequent reporting; adjust to suit battery life needs):

```text
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

- This sets reporting intervals and related repetition parameters according to the device's SMS command format.

3) Verify or check current settings on the device:

```text
SA200CMD;{{device_id}};02;PresetA
```

- This query command requests the device to send back preset configuration data for verification.

If your vendor tools or firmware use slightly different command syntax, follow the vendor's guidance. The examples above preserve the public SMS commands provided by the manufacturer and demonstrate how to point the device at Plaspy's shared endpoint.

## Configuration Notes

- Firmware differences and hardware revisions can change the exact SMS syntax or available fields; always confirm with the device firmware revision notes.  
- The ST4915 supports SMS-based provisioning in public documentation; depending on your install you may prefer vendor software or field tools instead.  
- Choose UDP or TCP transport per your reliability and overhead requirements; Plaspy accepts either and auto-detects the protocol server side.  
- APN username and password fields are optional and the command contains a flag to indicate when they are supplied; ensure you set that flag correctly.  
- Because Plaspy uses port 8888 for all devices, you only need to set this port on the tracker and point to d.plaspy.com or the Plaspy server IP.

## Why Use Plaspy with This Configuration

Configuring the Suntech ST4915 to report to Plaspy combines the device's long-life battery and rugged hardware with Plaspy's centralized real-time tracking and telemetry tools. For remote asset fleets, trailers, and equipment, this setup delivers prolonged unattended operation with actionable visibility, event alerts, and integrated workflows that reduce maintenance and improve recovery or operational response.

Learn more about Plaspy and how it can ingest ST4915 telemetry at https://www.plaspy.com. For the latest device-specific configuration details, firmware behavior, and command syntax verify the official Suntech documentation at http://www.suntechint.com/ as manufacturer methods and firmware versions can change over time.
