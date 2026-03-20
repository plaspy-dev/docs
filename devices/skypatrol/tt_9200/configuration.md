---
slug: /skypatrol/tt_9200/configuration
id: tt_9200-configuration
sidebar_label: Configuration
title: SkyPatrol - TT 9200 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for SkyPatrol TT 9200 showing Plaspy server settings and example AT commands for integration
keywords:
  - SkyPatrol TT 9200 configuration
  - SkyPatrol TT 9200 setup
  - TT 9200 Plaspy configuration
  - TT 9200 server settings
  - SkyPatrol tracker configuration
  - GPS tracker setup Plaspy
  - vehicle tracking TT 9200
  - TT 9200 AT commands
  - SkyPatrol EDDIE plus protocol
  - Plaspy tracker integration
---

# SkyPatrol - TT 9200 Configuration

This page covers the public configuration context for using the SkyPatrol TT 9200 with Plaspy. It collects the practical server settings and example commands that are commonly used to point TT 9200 devices to Plaspy and validate connectivity for tracking and reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so treat the commands and examples here as public guidance and confirm any device specific details against the manufacturer documentation.

## Configuration Overview

The goal of configuring a TT 9200 for Plaspy is to prepare the tracker to establish a reliable data connection to the Plaspy endpoint, authenticate on the mobile network, and report position and event data so the device becomes visible within the Plaspy platform.

- Configure the device APN and cellular connectivity so the tracker has IP data access
- Point the tracker to the Plaspy server endpoint so telemetry is delivered to Plaspy
- Choose the transport (UDP or TCP) if the device requires a transport selection
- Save and apply the settings, then restart or wake the device so the new server settings take effect
- Validate the device is reporting and visible in Plaspy after configuration

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the TT 9200. These are the shared values Plaspy uses for all supported devices.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP can be used on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged tracker or powered installation so the device can be configured and tested
- A valid SIM with data enabled and the correct APN for the mobile network
- Access to SkyPatrol configuration method or software for the TT 9200 such as AT command console or vendor tool
- Knowledge of any APN credentials required by the SIM (username and password placeholders may be needed)
- A method to restart or wake the device after applying configuration
- Administrative access to the Plaspy account or platform to confirm the device appears after configuration

## How This Tracker Connects to Plaspy

The TT 9200 is configured to open a data session and send location and event messages to Plaspy using the shared server endpoint and port. Plaspy receives the device connection and automatically determines the correct protocol so engineers and fleet managers can see device updates without per-device protocol selection on the server side.

- The tracker establishes a GPRS or cellular data session using the configured APN
- The device sends telemetry to the Plaspy server endpoint d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on the device configuration; choose the transport supported by the device and network
- Plaspy receives the connection and automatically detects the tracker protocol to decode messages
- Once connected the device reports location and configured events so the device is visible in Plaspy

## Common Configuration Workflow

1. Access the official SkyPatrol TT 9200 configuration method such as the AT command console or vendor configuration tool.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the port to 8888 for the server destination.
4. Choose UDP or TCP if the device requires a transport selection during configuration.
5. Configure the APN and any APN credentials so the tracker can obtain a data connection.
6. Apply or save the configuration to the device and persist settings to nonvolatile memory if required.
7. Restart or send a wake command to the device so the new settings take effect.
8. Validate the device reports to Plaspy and is visible in the platform.

## Example Configuration Commands

The SkyPatrol TT 9200 can be configured with AT style commands. The following public commands are provided as an ordered example extracted from public setup content. Preserve the placeholders and substitute your network APN information where required.

- Common AT commands sequence for initial setup and server assignment

```text
AT&F
AT+CGDCONT=1,"IP","{{apn}}"
AT$CGPCO=1,"{{apnu}},{{apnp}}",0
AT$TTARG=2
AT$TTSRVDST=1,1,"54.85.159.138",8888,2
AT$TTWAKEUP=1,1
AT&W
AT$RESET
```

Notes on the commands above:
- AT&F resets to factory radio defaults as a starting point for configuration.
- AT+CGDCONT sets the PDP context with the APN placeholder {{apn}}. Replace {{apn}} with the SIM data APN for your mobile operator.
- AT$CGPCO is shown with {{apnu}} and {{apnp}} placeholders for an APN username and password; include this only if your operator requires credentials. This command may appear conditionally depending on firmware and operator needs.
- AT$TTSRVDST sets the server destination. The example uses the Plaspy server IP 54.85.159.138 and port 8888. The final parameter in this command sequence is device specific; follow your manufacturer guide for exact parameter meanings.
- AT$TTWAKEUP enables wake or heartbeat behavior as part of startup; adjust as needed per installation.
- AT&W saves settings to nonvolatile memory.
- AT$RESET performs a device restart; use it when you want to apply settings immediately. Label this as optional if you prefer to restart the device using hardware power cycling.

If your vendor tool or firmware exposes the same fields in a graphical interface, enter the same values for APN, server, and port there instead of using raw AT commands.

## Configuration Notes

- Firmware and hardware revisions can change available AT commands and parameter ordering; check the device firmware release notes before applying commands.
- Use UDP or TCP based on network reliability and device behavior; some installers prefer UDP for lower overhead and others prefer TCP for session reliability.
- When inserting APN credentials keep placeholders {{apn}}, {{apnu}}, and {{apnp}} intact until you replace them with your operator values.
- If you use the server domain d.plaspy.com you can also supply the server IP 54.85.159.138 directly; both point to Plaspy on port 8888.
- Saving settings with AT&W and performing a controlled restart helps ensure persistent configuration across power cycles.

## Why Use Plaspy with This Configuration

Using the TT 9200 with Plaspy gives organizations a practical way to consolidate location and event reporting from a capable SkyPatrol device into a single fleet management platform. The TT 9200's low power behavior, global quad band connectivity, and advanced geofencing features pair well with Plaspy's automatic protocol detection and standard server endpoint to make device onboarding more predictable.

To learn more about Plaspy and how it supports tracker integrations visit https://www.plaspy.com. For the latest device specific setup details, firmware notes, and manufacturer instructions consult SkyPatrol documentation at https://www.skypatrol.com/ as device methods and firmware behavior can change over time.
