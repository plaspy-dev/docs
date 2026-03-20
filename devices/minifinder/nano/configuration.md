---
slug: /minifinder/nano/configuration
id: nano-configuration
sidebar_label: Configuration
title: MiniFinder - Nano Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for MiniFinder Nano showing Plaspy server settings APN placeholders and example SMS commands
keywords:
  - MiniFinder Nano configuration
  - MiniFinder Nano setup
  - MiniFinder Nano Plaspy
  - MiniFinder Nano GPS tracker setup
  - MiniFinder Nano server settings
  - MiniFinder Nano APN configuration
  - Plaspy device configuration
  - Plaspy server setup
  - wearable GPS tracker configuration
  - personal safety tracker setup
---

# MiniFinder - Nano Configuration

This page covers the public configuration context for using the MiniFinder Nano with Plaspy. It explains the practical server settings and the common steps needed to point a Nano tracker at Plaspy so positional fixes, SOS alerts and device events reach the platform. Where available, public SMS commands from the manufacturer are shown to help with a hands on configuration workflow.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, or vendor configuration tools, so the examples here focus on the public values required by Plaspy and on practical steps you can follow when configuring a Nano device.

## Configuration Overview

Configuring a MiniFinder Nano for Plaspy means preparing the device to send location, alarm and status information to the Plaspy server endpoint so the platform can receive, decode and display telemetry. The public configuration typically sets the device timezone, APN for cellular data, and the GPRS server endpoint (domain or IP) with port and transport type.

- Set timezone and device clock to match your operational reporting.
- Configure APN settings so the embedded eSIM or SIM can access mobile data.
- Point the device to the Plaspy server endpoint d.plaspy.com or the equivalent IP address and use the shared port.
- Select transport (UDP or TCP) if required by the device firmware.
- Validate connectivity so the device appears in Plaspy and sends regular position and alarm updates.
- Use SMS configuration if the manufacturer provides SMS commands or use the official MiniFinder configuration tool as appropriate.

## Plaspy Server Settings

- Plaspy server domain d.plaspy.com
- Plaspy server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects
- Note that Plaspy uses the same port 8888 for all supported devices

## Typical Requirements Before Setup

- A charged and operational MiniFinder Nano with access to the device SMS or manufacturer configuration portal
- Active cellular data on the Nano eSIM or inserted SIM and correct APN credentials
- The APN name and optional APN username and password if required by your mobile provider
- Access to the MiniFinder documentation or installer software for the specific Nano firmware revision
- Permission to add or monitor the device in your Plaspy account or fleet
- Basic tools to send SMS messages to the device if using SMS based configuration

## How This Tracker Connects to Plaspy

When configured, the Nano sends positional fixes, alarm events (for example SOS or fall alerts) and status updates to the Plaspy server endpoint on the shared port so Plaspy can ingest and present that data in dashboards and alerts. Use the public Plaspy server values to ensure the device routes telemetry to the correct destination.

- The device is configured to report to d.plaspy.com or directly to 54.85.159.138
- All communication is sent to port 8888 which Plaspy uses for supported devices
- You can choose UDP or TCP transport when the device requires a transport selection
- Plaspy automatically detects the tracker protocol and decodes incoming telemetry
- Once reporting is validated, Plaspy will surface location, alarms and timestamps for monitoring and reporting

## Common Configuration Workflow

1. Access the official MiniFinder configuration method or software for the Nano (SMS commands, web portal, or installer tool depending on firmware).
2. Enter the Plaspy server domain d.plaspy.com or use the server IP 54.85.159.138 as provided.
3. Set the server port to 8888 in the device configuration.
4. Choose UDP or TCP as the transport if the device requires a transport selection.
5. Configure the APN using your cellular provider values so the Nano has data connectivity.
6. Apply or save the configuration in the device tool or send the SMS configuration commands as required.
7. Restart the device if the manufacturer documentation indicates a reboot is needed to apply settings.
8. Validate that the device reports to Plaspy by confirming it appears in your Plaspy account and sends position or alarm messages.

## Example Configuration Commands

The MiniFinder Nano can be configured by SMS according to the public commands shown by the manufacturer. Send these messages in order when using SMS based setup. Keep APN placeholders as shown and replace them with your operator values.

- Set the timezone to UTC 0
```
tz+00
```

- Set the operator APN (replace [apn] with your APN; include [apnu] and [apnp] only if your provider requires a username and password)
```
S1,[apn],[apnu],[apnp]
```
Explanation: S1 sets the primary APN. If your provider does not require username or password, you can send S1,[apn] without the additional placeholders.

- Set the GPRS server to Plaspy by IP and port
```
IP1,54.85.159.138,8888
```
Notes: The manufacturer also allows domain entries in some tools. As an alternative use d.plaspy.com when the device supports domain configuration instead of an IP address. Plaspy accepts either the domain d.plaspy.com or the IP 54.85.159.138 on port 8888. Choose UDP or TCP transport if required by your device interface.

## Configuration Notes

- Firmware differences can change exact command syntax or SMS behavior; always confirm the syntax for your Nano firmware revision.
- SMS based setup is a common public option shown by MiniFinder, but vendor configuration tools or remote management portals may also be available for the Nano.
- When the device requires a transport selection, test both UDP and TCP modes if you encounter delivery issues; Plaspy supports both transports and automatically detects the device protocol on arrival.
- Preserve APN placeholders such as [apn], [apnu], and [apnp] when drafting commands and replace them with your mobile operator credentials.
- Keep the device powered and ensure cellular connectivity during configuration so the tracker can register and transmit immediately.

## Why Use Plaspy with This Configuration

Using the MiniFinder Nano with Plaspy helps organizations centralize personal safety telemetry, SOS alerts and location history in a single monitoring platform. The Nano's wearable form factor and hybrid positioning complement Plaspy's dashboards and notification rules, giving caregivers and operations teams immediate situational awareness and an audit trail of events.

To learn more about Plaspy visit https://www.plaspy.com. For the most current device specific configuration details, firmware notes and official commands consult MiniFinder at https://minifinder.se/ since manufacturer setup methods and firmware behavior can change over time.
