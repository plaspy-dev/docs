---
slug: /astra_telematics/at402/configuration
id: at402-configuration
sidebar_label: Configuration
title: Astra Telematics - AT402 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Astra Telematics AT402 with Plaspy including server settings and SMS commands
keywords:
  - Astra Telematics AT402 configuration
  - AT402 setup Plaspy
  - AT402 server configuration
  - AT402 GPS tracker setup
  - AT402 SMS configuration commands
  - Plaspy tracker integration
  - GPS tracker server settings
  - vehicle tracking platform setup
  - fleet tracking AT402
  - AT402 telemetry integration
---

# Astra Telematics - AT402 Configuration

This page covers the public configuration context for using the Astra Telematics AT402 tracker with Plaspy. It describes the shared Plaspy server settings you will point the device at, the common prerequisites for setup, and the practical SMS commands published for the AT402 to register with Plaspy. Use this guide to prepare devices before registering them in your Plaspy account or tenant.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The AT402 supports OTA and SMS configuration workflows; the manufacturer supplied SMS commands below are the public method shown for setting APN, server IP and port.

## Configuration Overview

Configuring the AT402 for Plaspy prepares the device to send GNSS and telemetry data to Plaspy so devices become visible and manageable in the platform. The process typically sets the device network APN, points the tracker to the Plaspy server endpoint, sets the server port, and verifies transport and connectivity.

- Configure the mobile data APN and optional APN credentials so the tracker has internet access.
- Point the tracker to the Plaspy server endpoint so telemetry is delivered to the platform.
- Set the shared Plaspy port so the device talks over the platform standard port.
- Choose the transport type if the device requires a UDP or TCP selection.
- Validate the device is visible in Plaspy and reporting location and event data.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol once data reaches the platform

## Typical Requirements Before Setup

- A powered and network enabled AT402 device with an active SIM card and data or SMS capability.
- The correct APN information from the mobile operator including optional APN username and password.
- Ability to send SMS to the device or access to Astra Telematics configuration tools depending on vendor workflow.
- A Plaspy account or tenant ready to receive devices and validate incoming telemetry.
- Knowledge of the device firmware version and any vendor instructions for the AT402 configuration method.

## How This Tracker Connects to Plaspy

The AT402 is configured to report location and telemetry to the shared Plaspy server endpoint and port so Plaspy can process position, event, and vehicle data. Once the tracker is pointed at the Plaspy endpoint it will send periodic and event driven reports over the chosen transport protocol.

- The device sends GNSS position and telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be either UDP or TCP depending on device selection and network behavior.
- Plaspy automatically detects the protocol used by the device when data arrives at the shared port.
- Plaspy processes incoming data for real time tracking, alerts, and telemetry dashboards.
- Verify visibility in Plaspy to confirm the AT402 is reporting correctly.

## Common Configuration Workflow

1. Access the official Astra Telematics configuration method for the AT402 such as SMS commands or the manufacturer software, following vendor instructions.
2. Configure the device APN using the appropriate APN values for your mobile operator so the unit has data connectivity.
3. Enter the Plaspy server endpoint by using either the domain d.plaspy.com or the server IP 54.85.159.138 in the device settings.
4. Set the server port to 8888 as the platform uses the same port for all devices.
5. Choose UDP or TCP if the AT402 requires an explicit transport selection; select the transport that matches your network and operator behavior.
6. Apply or save the configuration and restart the device if the manufacturer instructions require a reboot.
7. Validate that the device appears and reports in Plaspy and review incoming telemetry for correctness.

## Example Configuration Commands

The AT402 supports SMS based configuration. The following public SMS commands are provided by the manufacturer to set APN, optional APN credentials, server IP and server port. Send these commands as text messages to the device in the order shown.

- Set the operator APN
```text
$APAD,{{apn}}
```

- Set the APN username if required
```text
$APUN,{{apnu}}
```

- Set the APN password if required
```text
$APPW,{{apnp}}
```

- Set the GPRS server IP to Plaspy
```text
$IPAD,54.85.159.138
```

- Set the server port to Plaspy standard port
```text
$PORT,8888
```

Notes on placeholders
- {{apn}} is your mobile operator APN value.
- {{apnu}} is the APN username when required by the operator.
- {{apnp}} is the APN password when required by the operator.

If your AT402 firmware or vendor tool supports using d.plaspy.com instead of the numeric IP, enter d.plaspy.com in the relevant configuration field. If the device requires choosing UDP or TCP for transport, select the preferred option as part of the device settings.

## Configuration Notes

- The AT402 manufacturer provides SMS based commands as a public configuration method; vendor software or provisioning tools may also be available.
- Firmware versions and hardware revisions can affect command availability and syntax; confirm the exact commands for your unit before mass deployment.
- Choose UDP or TCP based on network reliability and operator recommendation; Plaspy accepts either transport on the shared port 8888.
- Preserve the command order when required by the manufacturer, especially when setting APN and network server values before restarting.
- Always verify device connectivity and visibility in Plaspy after configuration to confirm correct delivery of telemetry.

## Why Use Plaspy with This Configuration

Using the Astra Telematics AT402 with Plaspy gives organizations a straightforward path to real time location, vehicle telemetry, and event monitoring. Pointing the AT402 to Plaspy using the shared server settings ensures consistent ingestion of GNSS and vehicle data into Plaspy dashboards and rules for fleet oversight, anti theft workflows, and operational analytics.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest AT402 device specific setup details, firmware guidance, and manufacturer support refer to Astra Telematics at https://astratelematics.com/ as device behavior and setup steps can change over time.
