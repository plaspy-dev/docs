---
slug: /teltonika/fmc225/configuration
id: fmc225-configuration
sidebar_label: Configuration
title: Teltonika - FMC225 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the Teltonika FMC225 tracker for use with Plaspy using shared server settings and practical setup steps
keywords:
  - Teltonika FMC225 configuration
  - FMC225 setup Plaspy
  - Teltonika configuration guide
  - FMC225 server setup
  - Plaspy tracker setup
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet management tracker
  - Teltonika tracker setup
  - FMC225 telemetry integration
---

# Teltonika - FMC225 Configuration

This page covers the public configuration context for using the Teltonika FMC225 tracker with Plaspy. It explains the shared Plaspy server settings that the tracker should report to, and shows a practical example command that is commonly used to set core parameters. Use this guide to prepare a rugged FMC225 unit for reliable reporting to Plaspy while keeping in mind that manufacturer documentation and firmware versions remain the ultimate source for device specifics.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary with firmware level, hardware revision, installation type, and the vendor configuration tool you use. If you plan to apply the example command shown below, confirm the format and parameter meanings in Teltonika documentation or with your firmware release notes.

## Configuration Overview

This configuration process prepares the FMC225 to communicate with the Plaspy platform so location, telemetry and event data are delivered reliably. The goal is to set cellular APN parameters if required, point the device to the Plaspy server endpoint and port, and verify the device is visible and reporting in Plaspy.

- Set APN and related credentials so the FMC225 can use its cellular link to reach Plaspy.
- Configure the server endpoint and port to direct telemetry to Plaspy d.plaspy.com on the shared Plaspy port.
- Select the transport method if the device requires transport selection and save the configuration.
- Validate connectivity and confirm the tracker appears in Plaspy dashboards and reports.
- Use manufacturer tools or SMS command formats as supported by your device and firmware to apply settings.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and operational FMC225 unit installed per installer instructions.
- Active SIM card(s) and cellular connectivity for LTE or 2G fallback depending on region and coverage.
- Carrier APN, APN username and APN password ready for the SIM profile you will use.
- Access to the Teltonika configuration method you prefer such as SMS commands or the official manufacturer configuration tool.
- Physical access or remote console access to test connectivity and restart the device if needed.

## How This Tracker Connects to Plaspy

The FMC225 transmits GNSS positions and vehicle telemetry over the cellular network to the Plaspy shared server endpoint and port so Plaspy receives location, sensor and event data for visibility and monitoring. Plaspy ingests the incoming protocol automatically to present data in dashboards and APIs.

- Device reports GNSS positions and timestamps to Plaspy d.plaspy.com on port 8888.
- Telemetry from serial ports and impulse fuel inputs is forwarded to Plaspy for diagnostics and fuel reporting.
- Digital and analog input events are delivered to Plaspy for alarm, ignition and peripheral workflows.
- Dual SIM ensures continuity so the tracker maintains connection to the Plaspy server in multi carrier scenarios.
- Plaspy's automatic protocol detection removes the need to specify a platform protocol in most cases.

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software for the FMC225 such as the SMS command interface or the manufacturer configuration tool.
2. Enter the Plaspy server address either as the domain d.plaspy.com or as the IP 54.85.159.138 depending on your preferred setup.
3. Set the port to 8888 which is the shared Plaspy port used by all devices.
4. Choose UDP or TCP if the device requires a transport selection and include that in the saved configuration.
5. Apply or save the configuration to the device using the manufacturer method you used to edit settings.
6. Restart or power cycle the device if required by your firmware or configuration tool to make settings active.
7. Validate that the device reports to Plaspy and confirm visibility in Plaspy dashboards or via device status endpoints.

## Example Configuration Commands

To configure the basic parameters on your Teltonika device, a common single command string can be used. This example is provided in the public manufacturer style and preserves placeholders for APN values. The command below is often sent as an SMS style command or entered via the device configuration tool depending on your setup.

- Example batch parameter command

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Explanation of placeholders and fields
- {{apn}} is the carrier APN required for cellular data.
- {{apnu}} is the APN username when your carrier requires it.
- {{apnp}} is the APN password when your carrier requires it.
- 2004:d.plaspy.com sets the device to report to the Plaspy server domain.
- 2005:8888 sets the shared Plaspy port used by all devices.
- 2006:1 is included in this example parameter string as part of the device parameter set. Consult Teltonika documentation for the exact meaning of each numeric parameter index on your firmware version.

If you are uncertain how to send this command for your FMC225 firmware or hardware revision use the Teltonika official configuration tools or documentation to confirm whether SMS, UDP packet, or a configuration utility is the correct delivery method.

## Configuration Notes

- Firmware differences can change parameter IDs and exact command syntax. Always check the Teltonika documentation for the firmware version running on your FMC225 before applying commands.
- Because Plaspy automatically detects the tracker protocol and uses the same port for all devices, you generally only need to set the server address and port. Still confirm transport selection if your workflow or local network requires UDP or TCP.
- Dual SIM and regional radio variants affect connectivity and APN selection. Ensure APN settings are applied to the active SIM profile.
- The example command shown is a public style parameter batch. Some installers prefer the manufacturer GUI or remote management tools for bulk deployments and firmware management.
- After applying settings, verify device reachability and that position and telemetry messages appear in Plaspy.

## Why Use Plaspy with This Configuration

Using the Teltonika FMC225 together with Plaspy gives fleets continuous visibility and operational telemetry across challenging environments. The FMC225's rugged design and rich telemetry interfaces support accurate location, fuel monitoring and peripheral control while Plaspy collects and displays that data for monitoring, reporting and alerting.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific setup details and firmware behavior on the Teltonika official site https://www.teltonika-gps.com/ to ensure the commands and parameter IDs are correct for your FMC225 revision.
