---
slug: /calmamp/lmu_1100/configuration
id: lmu_1100-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-1100 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to CalmAmp LMU 1100 configuration for Plaspy with SMS command examples and server settings
keywords:
  - CalmAmp LMU-1100 configuration
  - CalmAmp LMU-1100 setup
  - LMU-1100 Plaspy
  - Plaspy tracker configuration
  - GPS tracker SMS configuration
  - vehicle tracker server configuration
  - asset tracking setup
  - LMU-1100 server configuration
  - fleet tracking setup
  - GPS platform configuration
---

# CalmAmp - LMU-1100 Configuration

This page covers the public configuration context for using the CalmAmp LMU-1100 tracker with Plaspy. It describes the shared Plaspy server settings you must apply, explains the typical preparation steps, and provides SMS command examples extracted from public device configuration guidance when available.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol while using a single port for all devices. Exact manufacturer side setup steps for the LMU-1100 can vary by firmware revision, hardware revision, installation type, and vendor tools, so consider this page a practical starting point and review manufacturer resources where required.

## Configuration Overview

Configuring the LMU-1100 for Plaspy prepares the device to deliver location and event data to Plaspy's central endpoint. The process typically adjusts network settings, points the device at Plaspy server endpoints, and verifies the connection so the tracker becomes visible in the platform.

- Point the device to the Plaspy server endpoint so it can send GPRS reports to Plaspy.
- Configure APN credentials and verify mobile data connectivity for the embedded modem.
- Set the Plaspy server port so the tracker reaches the correct collection endpoint.
- Use the device verification commands to confirm settings and ensure the device is reporting.
- Apply and reboot or restart the device so changes take effect and are recognized by Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device option
- Plaspy automatically detects the tracker protocol so devices may be configured using either UDP or TCP on port 8888

## Typical Requirements Before Setup

- Device installed and powered with a charged backup battery as required for commissioning.
- An active SIM card with mobile data enabled and SMS capability for SMS based configuration workflows.
- APN credentials from the mobile operator including APN name and optional username and password.
- Access to the manufacturer configuration method such as SMS commands or PULS management where available.
- Knowledge of the device identifier returned by the tracker (for LMU-1100 this is typically the MID value returned by the device).
- A plan to validate the device reports to the Plaspy server once configuration is applied.

## How This Tracker Connects to Plaspy

The LMU-1100 is configured to send GPRS data to Plaspy's shared server endpoint and port so the platform can ingest location and event messages. Plaspy's server listens on a single port for all supported devices and the platform detects the device protocol automatically.

- The tracker is set with the Plaspy server domain or IP so outbound reports target Plaspy.
- The configured port 8888 ensures messages arrive at Plaspy's collection service.
- UDP or TCP transport may be selected in the device if a transport choice is required.
- Once connected, the device sends periodic reports and event messages that Plaspy ingests for visibility and monitoring.
- Verification commands confirm the device is pointed to Plaspy and is actively reporting.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the LMU-1100 (SMS command interface or CalAmp management tools such as PULS).
2. Obtain the device MID or identifier using the device verification command so you can address SMS commands correctly.
3. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 into the device configuration as instructed by the manufacturer.
4. Set the server port to 8888 in the device settings.
5. Choose UDP or TCP transport if the device requires a transport selection; Plaspy will automatically detect protocol on its side.
6. Apply or save the configuration and reboot the device if required to apply settings.
7. Validate that the device reports to Plaspy by checking the device settings and monitoring whether reports arrive at the Plaspy platform.

## Example Configuration Commands

The LMU-1100 can be configured using SMS commands. The following commands are presented in the order recommended by the manufacturer guidance. The device MID (10 digit ID) returned by the device may be required when sending SMS commands; the manufacturer documentation indicates the MID is returned by the !R0 command. Placeholders such as [apn], [apnu], and [apnp] should be replaced with the operator APN, APN username, and APN password respectively.

- Set the operator APN
```text
!RP,2306,0,[apn]
```

- Set the APN operator username (if required)
```text
!RP,2314,0,[apnu]
```

- Set the APN operator password (if required)
```text
!RP,2315,0,[apnp]
```

- Set the GPRS server to Plaspy server IP
```text
!RP,2319,0,54.85.159.138
```

- Set the server port to Plaspy port
```text
!RP,769,0,8888
```

- Reboot the tracker to apply settings (recommended after configuration)
```text
!R3,70,0
```

- Check current settings on the device
```text
!RO
```

Notes on placeholders:
- [apn] — replace with your mobile operator APN name.
- [apnu] — replace with the APN username if the operator requires one.
- [apnp] — replace with the APN password if the operator requires one.

If your workflow uses the domain instead of the IP, enter d.plaspy.com where the device configuration supports a domain name. The example commands provided above use the publicly available server IP as shown in manufacturer guidance.

## Configuration Notes

- Firmware and hardware revisions may change command availability and parameter IDs; verify commands against the LMU-1100 firmware release you are using.
- The LMU-1100 supports SMS based configuration in public guidance, so ensure the controlling phone number and SMS method follow your operational security policies.
- When a device provides a choice between TCP and UDP, pick the transport supported by your installation environment; Plaspy will automatically detect the protocol once data is received on port 8888.
- Always verify APN credentials with your mobile operator before applying configuration commands to avoid connectivity delays.
- Over the air configuration and firmware updates may be available via CalAmp PULS for large deployments and remote management.

## Why Use Plaspy with This Configuration

Using the LMU-1100 with Plaspy gives organizations a practical way to capture location and event data from compact outdoor asset trackers and bring that data into a single visibility platform. Configuring the device to point at Plaspy's shared server endpoint and using the provided SMS commands or manufacturer tools enables trackers to deliver telemetry and event reports that support monitoring, recovery, and operational oversight.

To learn more about Plaspy and its features visit https://www.plaspy.com. For the most current device specific configuration steps, firmware notes, and technical details verify manufacturer documentation at http://www.calamp.com/ as device behavior and setup methods can change over time.
