---
slug: /teltonika/fmc250/configuration
id: fmc250-configuration
sidebar_label: Configuration
title: Teltonika - FMC250 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for configuring Teltonika FMC250 to report to Plaspy with example commands and server settings
keywords:
  - Teltonika FMC250 configuration
  - FMC250 setup guide
  - FMC250 server configuration
  - Teltonika tracker setup
  - Plaspy device configuration
  - GPS tracker configuration guide
  - vehicle telematics setup
  - FMC250 Plaspy integration
  - CAN telemetry configuration
  - fleet tracking setup
---

# Teltonika - FMC250 Configuration

This page covers the public configuration context for using the Teltonika FMC250 tracker with Plaspy. It explains the shared Plaspy server settings you must apply on the device and shows the public example command available for basic parameter setup. Use this guide to prepare the FMC250 to report to Plaspy and to understand what to validate during installation and commissioning.

Plaspy uses the same server endpoint and port across supported devices and automatically detects the tracker protocol, so the server settings are consistent and simple to apply. Exact manufacturer configuration steps can vary by firmware version, hardware revision, installation type, and vendor tools, so pair this guidance with Teltonika documentation and your installation process.

## Configuration Overview

The goal of this configuration is to prepare the FMC250 to send position and telemetry data to Plaspy and to verify reliable connectivity. Use the following process to set the server endpoint, confirm transport, and validate that the device appears in Plaspy.

- Point the device to the Plaspy server endpoint so data is routed to Plaspy dashboards and reports.
- Set the shared port used by Plaspy so the FMC250 communicates on the expected channel.
- Select the transport method if the device requires a choice between UDP and TCP.
- Apply and save settings using the manufacturer configuration method available to you.
- Validate connectivity and that the tracker is visible in Plaspy after restart or the next checkin.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration and recommended hostname use
- Server IP 54.85.159.138 as an alternative endpoint when DNS is not available
- Port 8888 which is used by Plaspy for all supported devices
- Transport support for UDP or TCP depending on device configuration options
- Plaspy automatically detects the tracker protocol so devices using standard Teltonika reporting will be recognized

## Typical Requirements Before Setup

- Confirm the FMC250 has a valid installed SIM card and active data plan compatible with LTE Cat 1 and 2G fallback
- Ensure the device is powered and connected as required for configuration and testing
- Have access to the Teltonika configuration method you will use, such as SMS commands or the Teltonika configuration tool
- Know the operator APN, username, and password to populate APN placeholders where required
- A clear testing environment to validate GNSS reception and initial data reporting to Plaspy
- Access to Teltonika firmware and product documentation to verify parameter IDs and transport mappings

## How This Tracker Connects to Plaspy

The FMC250 is configured to report GNSS location and CAN derived telemetry to the shared Plaspy server endpoint and port so Plaspy can ingest location, telemetry, and event data for dashboards and alerts. Once configured, the device will establish a data session to the Plaspy endpoint and deliver periodic reports.

- The tracker sends position and telemetry packets to d.plaspy.com or to 54.85.159.138 on port 8888
- Device transport can use UDP or TCP depending on the tracker configuration and local network conditions
- Plaspy automatically detects the tracker protocol so manual protocol mapping on Plaspy is not required
- Observed data becomes available in Plaspy for live tracking, event reporting, and maintenance workflows
- Confirmation of successful reporting is made by verifying device visibility and recent packets on Plaspy

## Common Configuration Workflow

1. Access the official Teltonika configuration method you plan to use for this unit, for example SMS commands or the Teltonika Configurator tool.
2. Enter the Plaspy server address using d.plaspy.com or the server IP 54.85.159.138 as required by your configuration method.
3. Set the port to 8888 so the tracker reports to the shared Plaspy port.
4. Choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration and follow any manufacturer prompts to confirm changes.
6. Restart the device if the manufacturer recommends a reboot or if required to apply network changes.
7. Validate that the device reports to Plaspy by confirming the tracker appears and sends recent telemetry in the Plaspy platform.

## Example Configuration Commands

To configure basic network and server parameters on the FMC250 using the public Teltonika command form provided for basic parameter setup, use the following command. This example preserves placeholders for APN settings.

- Public example command provided by Teltonika for basic parameter setup

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notes on the command and placeholders
- [apn] is the mobile operator APN. Replace with your carrier APN string.
- [apnu] is the APN username if required by your operator. Leave empty if not needed.
- [apnp] is the APN password if required. Leave empty if not needed.
- 2004 is set to the Plaspy server domain d.plaspy.com in this example. You may substitute 54.85.159.138 if you need to use the IP directly.
- 2005 sets the server port to 8888 which Plaspy uses for all supported devices.
- 2006 is a transport or mode parameter in the example command. Confirm the numeric mapping for transport selection in Teltonika documentation or your firmware release notes before changing it.
- This command can be sent using the Teltonika SMS based method or entered via the Teltonika configuration tool depending on your device provisioning workflow.

## Configuration Notes

- Firmware versions and device revisions can change parameter IDs and command formats; always check the Teltonika product documentation when in doubt.
- If you use UDP or TCP depends on your network reliability and carrier behavior; test both in your environment if the device supports both options.
- SMS based configuration is useful for remote units with no current data session, but confirm SMS command support and correct message format for your firmware.
- Using the server IP 54.85.159.138 can help when DNS is unreliable, but domains are preferred for future backend changes.
- Plaspy uses the same port 8888 for all supported devices and automatically detects tracker protocol so consistent server settings simplify fleet provisioning.

## Why Use Plaspy with This Configuration

Using the FMC250 with Plaspy provides fleet operators with consolidated location and CAN telemetry in one platform, enabling operational visibility, diagnostics, and maintenance workflows. Pointing the device to Plaspy's shared endpoint and port simplifies large scale rollouts because the same server settings apply across devices and Plaspy will detect supported tracker protocols automatically.

To learn more about Plaspy and how it handles device telemetry and fleet management, visit https://www.plaspy.com. For the most current device specific configuration methods, command references, and firmware details verify the manufacturer documentation at https://www.teltonika-gps.com/ before deploying at scale.
