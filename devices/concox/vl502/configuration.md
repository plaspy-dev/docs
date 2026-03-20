---
slug: /concox/vl502/configuration
id: vl502-configuration
sidebar_label: Configuration
title: Concox - VL502 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox VL502 tracker setup to send data to Plaspy using shared server settings and SMS commands
keywords:
  - Concox VL502 configuration
  - Concox VL502 setup
  - VL502 server configuration
  - VL502 Plaspy setup
  - Concox GPS tracker configuration
  - Concox OBDII tracker setup
  - VL502 SMS configuration
  - Fleet tracking VL502
  - Plaspy tracker configuration
  - Vehicle telematics VL502
---

# Concox - VL502 Configuration

This page documents the public configuration context for using the Concox VL502 OBDII GNSS vehicle tracker with Plaspy. It collects the practical server settings and the manufacturer SMS commands that are commonly used to point the device at Plaspy so that fleet and telematics data can be received and processed.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The VL502 supports SMS based configuration and GPRS reporting, and the examples below show how to set the device to report to Plaspy using the publicly available command set.

## Configuration Overview

Configuring the VL502 for Plaspy prepares the device to reliably send GNSS positions and OBDII telemetry to a central Plaspy endpoint. The goal is to ensure the tracker has correct network parameters, reporting intervals, and server destination so that Plaspy can ingest and display live and historical data for fleet operations.

- Set network and APN values so the tracker can establish a GPRS or LTE data session.
- Configure the server endpoint and port so the device reports to Plaspy.
- Define reporting interval and GPRS mode to control update frequency and data usage.
- Validate configuration using device verification commands and confirm visibility in Plaspy.
- Save and restart the device where required to activate changes.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

These exact values are the public Plaspy endpoints used to receive data from supported devices including the VL502. Plaspy uses the same port for all supported devices and will detect the device protocol automatically.

## Typical Requirements Before Setup

- A powered VL502 installed in the vehicle OBDII port and ready for configuration.
- An active SIM card with a data plan and the correct APN for the mobile operator.
- Ability to send SMS commands to the device phone number for SMS based configuration.
- Access to the manufacturer documentation or installer tools for firmware and command references.
- Basic tools to verify device reporting such as Plaspy account access and device mobile network visibility.

## How This Tracker Connects to Plaspy

When configured for Plaspy the VL502 sends GNSS position and OBDII telemetry over the mobile data network to the shared Plaspy endpoint and port. Plaspy then parses the incoming device protocol and maps data into the platform for live tracking, alerts, and reporting.

- The device is configured to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Data transport may use UDP or TCP depending on device selection and network conditions.
- Plaspy automatically detects the tracker protocol and begins ingesting telemetry.
- Location, OBDII parameters and event updates are forwarded to Plaspy for visibility and analytics.
- Regular update intervals ensure near real time position and status updates in the Plaspy platform.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the VL502 such as SMS commands or an installer tool.
2. Confirm the device has a working SIM and set the operator APN using the manufacturer command format.
3. Enter the Plaspy server address by sending d.plaspy.com or 54.85.159.138 as the SERVER setting.
4. Set port 8888 for the server entry.
5. Choose UDP or TCP if the device requires a transport selection for the SERVER command.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy and appears in the platform with fresh position or telemetry updates.

## Example Configuration Commands

The VL502 accepts SMS based configuration commands. The following public commands are presented in the order recommended for initial setup. Send these commands as SMS messages to the device number.

1. Optional initial factory reset
```text
FACTORY#
```
Label this command as optional or for initial setup only. Use it only when you intend to restore factory defaults.

2. Set the timezone to UTC 0
```text
GMT,E,0#
```

3. Set the operator APN
```text
APN,{{apn}}# 
```
If your APN requires a username or password include the optional fields as supported by the device:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Note: {{apn}} is the mobile operator APN string, {{apnu}} is the APN username if required, and {{apnp}} is the APN password if required. Keep these placeholders and replace them with your operator values.

4. Set the GPRS server using the Plaspy domain
```text
SERVER,1,d.plaspy.com,8888,0#
```

Or set the GPRS server using the Plaspy IP
```text
SERVER,0,54.85.159.138,8888,0#
```
Both forms are accepted. Use the domain form when DNS is preferred and the IP form when DNS is not available.

5. Set the update interval every 60 seconds
```text
TIMER,60#
```
Or set both GPS and ACC timers
```text
TIMER,60,60#
```

6. Enable GPRS mode
```text
GPRSON,1#
```

7. Verify current GPRS parameter settings
```text
GPRSSET#
```
Send this verification command to retrieve currently applied parameters from the device.

These commands reflect the publicly available SMS command set for configuring the VL502 to communicate with Plaspy. Preserve the order for initial setup where applicable.

## Configuration Notes

- Firmware variations can change command syntax or additional parameters. Check the VL502 firmware notes before mass deployment.
- SMS based setup and GPRS parameters are commonly used for initial provisioning on this model.
- Choose domain or IP SERVER syntax according to your network and DNS reliability needs.
- The device supports UDP or TCP transports; select the transport that matches your carrier and firewall requirements.
- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol upon connection.

## Why Use Plaspy with This Configuration

Configuring the VL502 to report to Plaspy provides a straightforward path to capture GNSS positions and rich OBDII telemetry in a single platform. For fleet operators and telematics programs this pairing offers centralized visibility, alerting, and reporting for vehicle location, diagnostics and driver behavior without complex integration work.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration methods and the latest firmware behavior on the manufacturer site https://www.iconcox.com/ to ensure your setup matches current product documentation.
