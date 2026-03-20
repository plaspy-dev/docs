---
slug: /queclink/gv55w/configuration
id: gv55w-configuration
sidebar_label: Configuration
title: QuecLink - GV55W Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for QuecLink GV55W integration with Plaspy using shared server settings and SMS commands
keywords:
  - QuecLink GV55W configuration
  - QuecLink GV55W setup
  - GV55W Plaspy configuration
  - QuecLink GPS tracker configuration
  - GV55W server configuration
  - GV55W tracking setup
  - QuecLink telematics setup
  - Plaspy device configuration
  - vehicle tracker GV55W
  - GV55W SMS configuration
---

# QuecLink - GV55W Configuration

This page documents the public configuration context for using the QuecLink GV55W tracker with Plaspy. It collects the practical server settings, common workflow steps, and publicly available SMS configuration commands that are used to point a GV55W device at Plaspy for real time reporting and telemetry ingestion.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Manufacturer side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. Where available this page includes sample SMS commands published for the GV55W and explains the required Plaspy server values to use during setup.

## Configuration Overview

Configuring a GV55W for Plaspy means preparing the device to communicate with Plaspy’s shared endpoint, validating that messages arrive at Plaspy, and enabling the device events you plan to use in the platform. The public configuration commands for this model are commonly applied by SMS but may also be available in QuecLink configuration software or vendor tools.

- Point the device to Plaspy server settings so messages route into your Plaspy account or organization.
- Configure APN and cellular connectivity so the tracker has GPRS/3G data access.
- Enable scheduled reporting and input events so Plaspy receives position and alarm updates.
- Verify connectivity from the device to Plaspy and confirm that the device appears in the Plaspy platform.
- Use the same Plaspy port and rely on Plaspy protocol auto detection to accept the tracker data.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when a device connects

## Typical Requirements Before Setup

- A powered GV55W with an active cellular SIM installed and data enabled for the target APN.
- Knowledge of the device configuration method your unit supports such as SMS commands or an official QuecLink configuration tool.
- The device default password or configured admin password required for SMS configuration where applicable. The sample commands below use the password queclink as the factory default.
- Access to a mobile phone capable of sending SMS commands to the tracker or to the manufacturer configuration software.
- Basic understanding of APN values from your cellular operator to populate placeholders such as {{apn}}, {{apnu}}, and {{apnp}} when needed.

## How This Tracker Connects to Plaspy

The GV55W sends GNSS position and telemetry messages over the cellular network to the Plaspy server endpoint. Once configured to use the Plaspy server domain or IP and the shared port, Plaspy ingests messages, normalizes telemetry, and makes location and event data available for live monitoring and reporting.

- The tracker reports to the shared Plaspy server endpoint d.plaspy.com or the IP 54.85.159.138.
- All devices use the same Plaspy port 8888 for reporting.
- The device may use UDP or TCP transport to send messages to Plaspy depending on configuration; Plaspy supports both.
- Plaspy automatically detects the tracker protocol so explicit protocol selection on Plaspy is not required.
- Event and input reports such as SOS or ignition events are transmitted to Plaspy for alerts and analytics.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the GV55W, or prepare to send SMS configuration commands if SMS is supported.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the IP address 54.85.159.138 when prompted by the device configuration.
3. Set the port to 8888 in the device server settings.
4. Choose UDP or TCP transport if the device requires a transport selection during setup.
5. Configure APN and any necessary authentication for the device to obtain cellular data connectivity.
6. Apply or save the configuration and restart the tracker if the device or workflow requires a restart.
7. Validate that the device reports to Plaspy by confirming the unit appears in the Plaspy platform and that position and event messages are received.

## Example Configuration Commands

The following example SMS commands are provided in public GV55W configuration material. These commands are shown in the same order as commonly applied. The sample commands use the device password queclink which is the default password shown in the public example. If your device has a different admin password, replace queclink with your device password. Placeholders such as {{apn}}, {{apnu}}, and {{apnp}} should be replaced with your cellular operator values.

- Optional initial factory restore (use only when you need to reset the device to factory defaults)

```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Set the time zone to UTC 0

```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Set the operator APN. Replace placeholders with your operator values:
  - {{apn}} = APN name
  - {{apnu}} = APN username if required
  - {{apnp}} = APN password if required

```
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```

- Configure the GPRS server to report to Plaspy. This command includes domain and IP and sets the server port. It targets Plaspy at d.plaspy.com and 54.85.159.138 using port 8888:

```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

- Set the report interval to 60 seconds

```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Enable SOS button notification on input 2

```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Note: These SMS commands are provided as public examples. The exact command strings, parameters and required order can vary by firmware version and hardware revision. Only send commands you understand and confirm with your device documentation.

## Configuration Notes

- SMS based configuration is commonly used for the GV55W but manufacturer tools or vendor configuration software may also be available and are often preferred for batch provisioning.
- Different firmware versions or hardware revisions may change the exact command syntax or available parameters; always verify with the current QuecLink documentation.
- Plaspy accepts both UDP and TCP on port 8888 and will auto detect the device protocol; choose transport on the device only if required.
- Keep the device admin password secure and change factory defaults when deploying at scale.
- If you use the factory restore command, treat it as optional and use it only when needed for a clean configuration.

## Why Use Plaspy with This Configuration

Using the GV55W with Plaspy provides a straightforward path to real time location, event alerts, and telemetry visibility for light vehicle fleets. Pointing the tracker to Plaspy’s shared server settings and confirming connectivity enables Plaspy to normalize telemetry from the GV55W and surface position, ignition, SOS, and scheduled reports for operational monitoring and incident response.

To learn more about Plaspy and how devices are managed on the platform visit https://www.plaspy.com. Device specific configuration methods, firmware behavior and manufacturer details can change over time so verify current setup instructions and command syntax with QuecLink at https://www.queclink.com/ before applying configuration at scale.
