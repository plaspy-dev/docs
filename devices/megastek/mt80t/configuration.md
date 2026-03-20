---
slug: /megastek/mt80t/configuration
id: mt80t-configuration
sidebar_label: Configuration
title: Megastek - MT80T Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Megastek MT80T for Plaspy using public SMS commands and shared Plaspy server settings for GPRS reporting
keywords:
  - Megastek MT80T configuration
  - MT80T setup
  - Megastek GPS tracker configuration
  - MT80T Plaspy configuration
  - GPS tracker server configuration
  - MT80T SMS commands
  - MT80T APN setup
  - Plaspy tracker integration
  - medical GPS tracker setup
  - personal tracker configuration
---

# Megastek - MT80T Configuration

This page documents the public configuration context for using the Megastek MT80T with the Plaspy platform. It focuses on the practical server settings and SMS based configuration commands that are commonly used to point MT80T devices to Plaspy for GPRS reporting and device visibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup may vary by firmware version, hardware revision, installation type, and vendor tools, so use this guide together with the official device manual and vendor instructions.

## Configuration Overview

This configuration process prepares the MT80T to report location and telemetry to Plaspy by setting the device identifier, APN, reporting interval, and GPRS server endpoint. The goal is to ensure the tracker can establish a data link to Plaspy and appear in the platform for real time monitoring and event alerts.

- Configure the device identifier so Plaspy can associate the device with an account or record.
- Enter operator APN settings so the tracker can use cellular data for GPRS reporting.
- Set the device update interval to control reporting frequency to Plaspy.
- Configure the GPRS server address to d.plaspy.com or the Plaspy IP so telemetry is delivered to Plaspy.
- Enable GPRS data mode so the tracker sends position and event data over cellular.
- Validate the device appears in Plaspy and that protocol detection correctly processes incoming messages.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support UDP or TCP on port 8888 depending on device capability  
- Plaspy automatically detects the tracker protocol so the platform can accept many tracker formats on the same port

## Typical Requirements Before Setup

- A charged MT80T device with access to the device IMEI or identifier for configuration.
- An active cellular SIM card provisioned for data and able to send and receive SMS if using SMS based configuration.
- Knowledge of the operator APN and any APN username or password if required by the carrier.
- Access to the official manufacturer SMS command list or configuration utility for the MT80T.
- The default device password used in SMS setup examples is 000000 unless the vendor has instructed otherwise.
- A test or staging Plaspy account or monitoring environment to validate the device after configuration.

## How This Tracker Connects to Plaspy

The MT80T sends its GNSS position and event telemetry to Plaspy by reporting to the shared Plaspy server endpoint and port. Once the device is configured to target Plaspy, the platform receives messages and automatically interprets the tracker protocol.

- The tracker is set to report to d.plaspy.com or the IP 54.85.159.138 on port 8888.
- Transport can be configured as UDP or TCP depending on the device option and network requirements.
- Plaspy automatically detects the tracker protocol so messages from MT80T are parsed without requiring a device specific port.
- Data sent to the Plaspy endpoint becomes visible in the Plaspy platform for real time monitoring and alerting.
- After successful connection, the device will report periodic position and event updates as configured by the interval setting.

## Common Configuration Workflow

1. Access the official Megastek configuration method for the MT80T, for example the vendor SMS command set or the manufacturer configuration tool.  
2. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 in the device server settings.  
3. Set the server port to 8888 which Plaspy uses for all supported devices.  
4. Choose UDP or TCP if the MT80T requires selection of a transport protocol.  
5. Apply or save the configuration on the device and enable GPRS or data reporting mode.  
6. Restart the device if the manufacturer instructions require a reboot for settings to take effect.  
7. Validate that the tracker reports to Plaspy by checking device connectivity and presence in the Plaspy platform.

## Example Configuration Commands

The MT80T may be configured by sending SMS commands to the device phone number. The examples below are taken from the public device command set and show the sequence commonly used to prepare the tracker for Plaspy reporting. The sample commands use the default device password 000000 in the examples. Replace placeholders and IMEI parts as noted.

- Note on IMEI in the device ID command
  - The device ID command includes the tracker IMEI. The published example uses the last 15 digits of the IMEI. Replace the X characters below with the actual IMEI digits.

1) Set the device ID (replace XXXXXXXXXXXXXXX with the last 15 digits of the IMEI)
```text
M000000,22,XXXXXXXXXXXXXXX
```

2) Set the operator APN. Replace {{apn}}, {{apnu}}, and {{apnp}} with your carrier APN, APN username, and APN password as required. The username and password fields may be omitted if not required by the operator.
```text
M000000,23,{{apn}}{{,{{apnu}},{{apnp}}}}
```

3) Set the update interval to 60 seconds
```text
M000000,25,60
```

4) Set the GPRS server to Plaspy. This example follows the public command order shown in vendor documentation. Confirm parameter ordering in the device manual if unsure.
```text
M000000,24,56 54.85.159.138,8888
```

5) Enable GPRS mode
```text
M000000,21,2
```

- Usage notes for the placeholders
  - {{apn}} is the mobile operator APN string.  
  - {{apnu}} and {{apnp}} are optional APN username and password fields if your operator requires them.  
  - Retain the default password 000000 in commands unless your device is configured with a different password.

## Configuration Notes

- SMS based configuration is supported by the public MT80T command set but exact syntax and parameter order can vary by firmware version. Confirm with the device manual.
- Some commands include index or flag fields before the server address. If the meaning is unclear consult the manufacturer documentation to avoid misconfiguring server slots.
- Choose UDP or TCP based on network reliability and device support. Plaspy accepts both on port 8888 and will auto detect the incoming protocol.
- Firmware and hardware revisions can change command behavior or parameter formats. Verify commands against the MT80T documentation for your specific firmware version.
- Keep APN credentials ready when configuring GPRS settings and test connectivity after applying settings.

## Why Use Plaspy with This Configuration

Using the MT80T with Plaspy centralizes location and health telemetry into a single monitoring platform so organizations can track devices, receive alarm notifications such as SOS or fall events, and review historical tracks. Plaspy's automatic protocol detection and the shared server port simplify device onboarding because many tracker models can be directed to the same Plaspy endpoint.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and configuration details consult the official manufacturer resources at https://www.megastek.com/ as methods and firmware behavior can change over time.
