---
slug: /xexun/u02/configuration
id: u02-configuration
sidebar_label: Configuration
title: Xexun - U02 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xexun U02 integration with Plaspy using shared server settings and SMS commands for GPRS reporting
keywords:
  - Xexun U02 configuration
  - Xexun U02 setup
  - Xexun U02 server configuration
  - U02 Plaspy integration
  - U02 SMS commands
  - U02 GPRS setup
  - U02 indoor positioning configuration
  - Plaspy tracker setup
  - wearable tracker configuration
  - UWB tracker Plaspy
---

# Xexun - U02 Configuration

This page documents the public configuration context for using the Xexun U02 with Plaspy. It focuses on the practical server settings, the common setup workflow, and SMS commands that are publicly available for configuring GPRS reporting to the Plaspy platform. Use this page to prepare the device for visibility in Plaspy and to understand the required values that the device must report to.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The U02 also supports SMS based configuration in its public documentation; where SMS commands are provided below, they follow the U02 manufacturer format and preserve placeholders such as {{apn}}, {{apnu}}, and {{apnp}}.

## Configuration Overview

This configuration process prepares the U02 to forward location and sensor telemetry into the Plaspy platform using shared Plaspy server settings. The practical goal is to set the device network settings, verify connectivity, and enable continuous reporting so Plaspy can display live locations, tamper events, and telemetry.

- Configure the U02 to use Plaspy as its GPRS server endpoint so location and event data reach Plaspy.
- Provide operator APN credentials and enable GPRS mode so the device can establish a data connection.
- Validate the device is reporting to the Plaspy server and port and that messages appear in the platform.
- Use SMS or the manufacturer configuration tool where available to apply and save settings.
- Verify tamper, emergency, and telemetry events are visible in Plaspy once reporting is active.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP on port 8888; the device may be configured to use either UDP or TCP  
- Plaspy automatically detects the tracker protocol when a device connects to the shared server

## Typical Requirements Before Setup

- A powered and accessible U02 device with a charged battery and any required anchors or gateway infrastructure active.  
- A valid cellular SIM with an active data plan and correct operator APN information if the device uses GPRS for reporting.  
- Ability to send SMS messages to the device for SMS based configuration if you choose that method.  
- Access to the official Xexun configuration method or software and knowledge of the device default password (the public example uses 123456).  
- A Plaspy account or deployment where you can verify the device reporting status and view incoming events.

## How This Tracker Connects to Plaspy

The U02 integrates with Plaspy via the anchor and positioning engine which forwards computed location fixes and sensor events to the Plaspy server endpoint. Configure the U02 or associated anchor gateway to report to the shared Plaspy endpoint and port so Plaspy receives location and telemetry for visualization, alerts, and reporting.

- The anchor or positioning gateway forwards UWB-derived location fixes and telemetry into Plaspy at d.plaspy.com on port 8888.  
- Sensor uploads such as heart rate and motion are sent to the same Plaspy endpoint for live and historical monitoring.  
- Tamper and emergency events from the U02 are reported to Plaspy as immediate alerts for operational response.  
- Two-way messaging between anchors and device supports system push messages; those messages are routed into the Plaspy workflow.  
- Plaspy consolidates U02 indoor events with outdoor GPS tracker telemetry for a unified operational view.

## Common Configuration Workflow

1. Access the official Xexun configuration method or software, or prepare to send SMS commands if using SMS configuration.  
2. On the device or gateway settings, enter the Plaspy server as either d.plaspy.com or 54.85.159.138.  
3. Set the server port to 8888. Note that Plaspy uses the same port for all supported devices.  
4. Choose UDP or TCP transport if the device requires a transport selection. Plaspy supports both and will automatically detect protocol.  
5. Apply or save the configuration on the device or gateway and, if required, restart the device or gateway.  
6. Validate that the device reports to Plaspy by checking device connectivity and live events in the Plaspy platform.  
7. Test tamper, emergency, and telemetry events to ensure they appear correctly in Plaspy.

## Example Configuration Commands

The U02 public configuration includes SMS commands that configure APN, set the Plaspy server, and enable GPRS reporting. The sample commands below use the device default password 123456 as presented in the public manufacturer guidance. Send each line as an SMS to the device phone number in the order shown when order matters.

- Optional initial factory restore (use only when needed or for initial setup):
```
begin123456
```

- Set the operator APN (replace {{apn}} with your operator APN string):
```
apn123456 {{apn}}
```

- Set the APN username if required by your operator (replace {{apnu}} with APN username):
```
apnuser123456 {{apnu}}
```

- Set the APN password if required by your operator (replace {{apnp}} with APN password):
```
apnpasswd123456 {{apnp}}
```

- Set the GPRS server to report to Plaspy. This uses the Plaspy server IP and port exactly as publicly specified:
```
adminip123456 54.85.159.138 8888
```

- Enable GPRS reporting mode on the device:
```
gprsmode123456
```

- Set the reporting interval to 60 seconds (example interval command as provided by manufacturer):
```
t060s***n123456
```

Notes on placeholders and password:
- {{apn}} is a placeholder for your mobile operator APN.  
- {{apnu}} and {{apnp}} are optional placeholders for APN username and password when the operator requires them.  
- 123456 is shown in the public example as the device default password. If your device has a different password, use that password in each command string where the password appears.

## Configuration Notes

- Manufacturer commands and exact SMS syntax can vary by firmware version and hardware revision. Always confirm command syntax against your device firmware notes.  
- SMS based configuration is supported in the public guidance and can be convenient when the device is remote, but confirm SMS delivery and device response before relying on it.  
- Choose UDP or TCP based on your network and gateway preferences; Plaspy supports both and will auto detect the protocol when the device connects.  
- Plaspy uses the same server port 8888 for all devices, so set that port consistently across device and gateway configurations.  
- Keep manufacturer documentation handy; small differences in command formatting, spacing, or password handling can affect configuration success.

## Why Use Plaspy with This Configuration

Using the Xexun U02 with Plaspy provides organizations with high resolution indoor positioning and personnel telemetry in the same operational platform where vehicle and GPS tracker telemetry is managed. When the U02 is configured to report to Plaspy at d.plaspy.com on port 8888, teams gain unified situational awareness that combines centimetre level indoor locations, tamper and emergency alerts, and sensor data alongside outdoor GPS telemetry.

To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and hardware details for the Xexun U02, verify current information on the manufacturer site https://www.xexun.com/ as manufacturer specifications and setup procedures can change over time.
