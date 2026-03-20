---
slug: /winrich/gt003/configuration
id: gt003-configuration
sidebar_label: Configuration
title: Winrich - GT003 Configuration
sidebar_class_name: menu_item_tracker
description: Setup guide for Winrich GT003 tracker configuration with Plaspy server settings and SMS commands
keywords:
  - Winrich GT003 configuration
  - Winrich GT003 setup
  - Winrich GT003 server configuration
  - GT003 Plaspy integration
  - Plaspy tracker configuration
  - GPS tracker configuration
  - vehicle tracking setup
  - GT003 SMS commands
  - GT003 APN configuration
  - Plaspy server settings
---

# Winrich - GT003 Configuration

This page covers the public configuration context required to use the Winrich GT003 tracker with Plaspy. It explains the shared Plaspy server settings, the common manufacturer side commands supplied in public documentation, and the practical steps installers and integrators use to prepare the GT003 for reliable reporting into Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer setup steps for the GT003 can vary by firmware, hardware revision, installation type, and vendor tools. The example SMS commands shown below are the publicly available method for configuring this model and should be used alongside the official Winrich documentation.

## Configuration Overview

The GT003 configuration process prepares the tracker to establish GPRS connectivity and report GPS positions and events to Plaspy. For this model, common configuration is performed by sending SMS configuration commands from an authorized phone number to the device. The goal is to set network APN details, point the device to the Plaspy server endpoint, and confirm reporting frequency and status.

- Configure the device APN so the tracker can connect to the mobile data network for GPRS
- Point the tracker at the Plaspy server endpoint so location and event data route to Plaspy
- Set reporting interval so the device sends updates at the needed frequency for your use case
- Validate configuration and device status with built in verification commands
- Optionally perform a factory reset as an initial step when preparing a new or redeployed unit

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and the platform uses the same port for all supported devices

## Typical Requirements Before Setup

- A properly installed and powered GT003 wired to the vehicle electrical system
- An active SIM card with a data plan and the correct APN for the mobile operator
- Ability to send SMS commands to the device if using SMS based configuration
- Access to the official Winrich configuration instructions or support tool for reference
- A phone number authorized to configure the device if the tracker uses command authorization

## How This Tracker Connects to Plaspy

The GT003 sends GPS positions and event telemetry over GSM GPRS to the Plaspy server using the shared endpoint and port. Once configured with the correct APN and server settings, the device will establish a data session and transmit updates for live mapping, alerts, and historical reporting inside Plaspy.

- The tracker initiates a GPRS connection using the operator APN you set
- It reports to the configured Plaspy endpoint d.plaspy.com or directly to 54.85.159.138
- Data is sent to port 8888 using either UDP or TCP depending on the device transport configuration
- Plaspy ingests the incoming protocol automatically without requiring per device port changes
- The device can report periodic updates, ignition events, and alerts to the platform for monitoring

## Common Configuration Workflow

1. Access the official Winrich configuration method for the GT003 such as SMS commands documented by the manufacturer
2. Ensure the SIM card and APN settings are ready and that the device has power
3. Enter d.plaspy.com or 54.85.159.138 as the device GPRS server according to the device command method
4. Set the port to 8888 and choose UDP or TCP if the device requires a transport selection
5. Apply or send the configuration changes and save them on the tracker
6. Restart the tracker if the manufacturer instructions require a reboot to apply settings
7. Validate that the device reports to Plaspy using the verification commands or by confirming device visibility in the platform

## Example Configuration Commands

The GT003 supports SMS based configuration using the following public commands. Send these SMS messages to the tracker in the order shown when performing an initial setup. Label the factory reset command as optional and use it only when preparing a device for new deployment or troubleshooting.

- Factory reset (optional initial step)
```
940#
```

- Set the time zone to UTC 0
```
801#W0#
```

- Set the operator APN
Note the placeholders. Replace {{apn}} with your mobile operator APN. If your operator requires a username or password use {{apnu}} and {{apnp}} respectively.
```
802#{{apn}}#{{apnu}}#{{apnp}}#
```

- Set the GPRS server to Plaspy using the server IP and port that Plaspy also exposes as d.plaspy.com. This configures reporting to Plaspy on port 8888.
```
803#54.85.159.138#8888#
```

- Set the position update interval to 60 seconds
```
730#60#
```

- Check current settings (useful to verify the applied configuration)
```
886#
```

- Check device status
```
902#
```

## Configuration Notes

- SMS based setup is the public method shown for GT003 configuration; some installers prefer using manufacturer tools if available for bulk deployment
- Different firmware versions or hardware revisions may change exact command syntax or available parameters; verify commands before wide deployment
- Choose TCP or UDP according to your installation needs; Plaspy supports either transport on port 8888 and will detect protocol automatically
- When setting the APN, keep placeholders {{apn}}, {{apnu}}, and {{apnp}} and replace them with your operator values; many operators require only the APN field
- Use verification commands such as 886# and 902# to confirm settings and status after applying configuration

## Why Use Plaspy with This Configuration

Using the Winrich GT003 with Plaspy gives fleet managers continuous position visibility, route history, and event driven alerts through a single platform. The GT003 is designed to supply real time location and telemetry over GSM GPRS so Plaspy can deliver live mapping, geo fence alerts, ignition event reporting, and reporting tools that support operational oversight and rapid response.

To learn more about Plaspy and how the platform can integrate with devices like the GT003 visit https://www.plaspy.com. For the most current device specific configuration methods, firmware notes, and manufacturer details confirm the latest Winrich documentation at http://www.winrichgroup.com/en/
