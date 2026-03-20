---
slug: /sinotrack/al_900g/configuration
id: al_900g-configuration
sidebar_label: Configuration
title: SinoTrack - AL-900G Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for SinoTrack AL-900G use with Plaspy including server settings SMS commands and practical workflow
keywords:
  - SinoTrack AL-900G configuration
  - SinoTrack AL-900G setup
  - SinoTrack AL-900G Plaspy
  - SinoTrack GPS tracker configuration
  - AL-900G server configuration
  - AL-900G SMS commands
  - Plaspy device setup
  - GPS tracker configuration guide
  - vehicle tracking AL-900G
  - AL-900G GPRS setup
---

# SinoTrack - AL-900G Configuration

This page documents the public configuration context for using the SinoTrack AL-900G tracker with Plaspy. It gathers the practical server settings, common workflow steps, and publicly available SMS commands that are used to point AL-900G devices to the Plaspy platform and validate connectivity. Use this page as a technical reference to prepare a device for integration with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The commands and values shown here are the public configuration items provided for the AL-900G and should be verified against device firmware documentation when necessary.

## Configuration Overview

The configuration process prepares an AL-900G tracker to send position and status reports to the Plaspy server so the device becomes visible and manageable in the platform. For many installations this is done using the manufacturer's SMS command set or a configuration tool, followed by validation that reports arrive at Plaspy.

- Point the device to the Plaspy server endpoint so telemetry is routed to the platform.
- Configure the device GPRS and APN settings so it can establish a data connection.
- Set reporting intervals so the device sends updates at the desired cadence.
- Validate configuration using the device verification command and Plaspy incoming data.
- Optionally restore or reset device defaults before applying organization standard settings.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP (device can be configured for UDP or TCP on port 8888)  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- Ensure the tracker has power and a charged backup battery if installed.
- Have access to the manufacturer's recommended configuration method such as SMS commands or vendor tool.
- A valid SIM card and mobile data service with the correct APN for your operator (APN credentials required for GPRS).
- Basic installer access to the vehicle or asset to send SMS commands or attach configuration hardware.
- Confirm firmware version and any vendor notes that affect command syntax or available features.

## How This Tracker Connects to Plaspy

The AL-900G is configured to report location and telemetry to the shared Plaspy server endpoint and port so Plaspy can process and display the device in the platform. Plaspy listens on a single port for all devices and infers the correct device protocol automatically.

- Device connects over GPRS to the Plaspy server domain or IP and port 8888.  
- The tracker uses the configured APN and GPRS credentials to establish the data session.  
- Reporting intervals determine how frequently the AL-900G sends position updates to Plaspy.  
- Plaspy receives the data and automatically detects the protocol to parse messages.  
- Once parsed, location and event data become visible in the Plaspy interface for monitoring and reporting.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software (for AL-900G, SMS commands are commonly used).  
2. Enter the Plaspy server target using either d.plaspy.com or the server IP 54.85.159.138 as required by the device configuration option.  
3. Set the server port to 8888 (Plaspy uses the same port for all devices).  
4. Choose the transport protocol (UDP or TCP) if the device requires a transport selection.  
5. Configure APN and GPRS credentials required by your SIM operator.  
6. Apply or save the configuration and switch the device to GPRS/data mode if necessary.  
7. Restart the device if recommended by the manufacturer.  
8. Validate that the device reports to Plaspy and verify that the platform receives messages and shows device location.

## Example Configuration Commands

The AL-900G can be configured via SMS using the public commands below. These commands are provided in the order given in the manufacturer information. Commands may require an admin password depending on firmware; confirm with your vendor documentation.

1. Optional initial factory reset (use only if you need to restore factory defaults):
```
RESET
```

2. Set the time zone to UTC+0:
```
8960000E00
```

3. Configure the operator APN and credentials (replace placeholders with your operator values):
```
8030000 {{apn}} {{apnu}} {{apnp}}
```
- {{apn}} is the APN name provided by the mobile operator.  
- {{apnu}} is the APN username if required (leave blank if not used).  
- {{apnp}} is the APN password if required (leave blank if not used).

4. Set the GPRS server endpoint and port for Plaspy (this example uses the Plaspy server IP and port):
```
8040000 54.85.159.138 8888
```
You may use d.plaspy.com where the device accepts a domain instead of an IP, but the public example command sets the IP.

5. Set reporting update interval when turned on (example sets interval to 60 seconds):
```
8050000 60
```

6. Set update interval when device is off state reporting (example sets to 60 seconds):
```
8090000 60
```

7. Switch the device to GPRS mode (enable data reporting):
```
7100000
```

8. Verify current configuration on the device:
```
RCONF
```
- The RCONF command returns device configuration details including the device ID used by Plaspy.

## Configuration Notes

- Firmware revisions and vendor tools can change command syntax or behavior; always confirm syntax against the device firmware you have installed.  
- SMS based configuration is a common method for AL-900G devices; if you use a configuration tool or USB interface consult the manufacturer guide for equivalent steps.  
- Choose UDP or TCP according to your network and installer preferences; Plaspy accepts both on port 8888 and will detect the protocol automatically.  
- Keep APN placeholders {{apn}}, {{apnu}}, and {{apnp}} ready with operator values to avoid connection failures.  
- Use the RCONF verification command to confirm the device is using the expected GPRS server and settings before validating on the Plaspy side.

## Why Use Plaspy with This Configuration

Using Plaspy with the AL-900G provides a straightforward path to centralize location, status, and event reporting for fleets and assets. Pointing the device to d.plaspy.com or 54.85.159.138 on port 8888 and enabling GPRS reporting allows Plaspy to receive device messages and automatically detect the correct protocol so devices appear in the platform without per-device port changes.

Learn more about Plaspy and how it handles device integrations at https://www.plaspy.com. For the most current device specific details, firmware notes, and official command reference for the AL-900G, verify information on the manufacturer site https://www.sinotrackgps.com/.
