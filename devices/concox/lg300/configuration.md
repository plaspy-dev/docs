---
slug: /concox/lg300/configuration
id: lg300-configuration
sidebar_label: Configuration
title: Concox - LG300 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Concox LG300 for use with Plaspy with example SMS commands and server settings for reliable asset tracking
keywords:
  - Concox LG300 configuration
  - Concox LG300 setup
  - LG300 Plaspy configuration
  - LG300 server configuration
  - Concox GPS tracker configuration
  - Plaspy tracker setup
  - LG300 SMS commands
  - LG300 GPRS setup
  - vehicle tracking LG300
  - fleet management LG300
---

# Concox - LG300 Configuration

This page covers the public configuration context for using the Concox LG300 tracker with Plaspy. It consolidates the practical server settings, SMS commands, and workflow steps you can use to prepare an LG300 device to report location and event telemetry into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The LG300 supports cloud reporting and SMS based configuration, and this page includes the public SMS commands that are commonly used to set APN, server, timer, and GPRS mode.

## Configuration Overview

Configuring the LG300 for Plaspy is primarily about pointing the device to Plaspy ingestion endpoints, enabling GPRS or SMS reporting, and validating that telemetry arrives in the platform. The public configuration commands below are applicable for SMS based setup workflows commonly used in the field.

- Set the device APN so it can open a GPRS data session for cloud reporting.
- Configure the server settings to point the device to Plaspy using the shared server domain or IP and the standard port.
- Enable GPRS reporting and set an appropriate reporting interval to balance location fidelity and battery life.
- Verify configuration with an on device status check and confirm telemetry arrives in Plaspy.
- Use SMS commands for remote configuration when physical access or a manufacturer tool is not available.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged LG300 or connected power source and functional battery for setup operations
- A valid SIM card with GPRS data and SMS capability and knowledge of the carrier APN
- Access to SMS sending capability from a phone or management tool to send configuration commands
- Access to the official Concox configuration instructions or installer tool for reference
- Permission to restart or power cycle the device if required to apply settings

## How This Tracker Connects to Plaspy

The LG300 transmits GNSS position fixes and event telemetry over GSM to Plaspy using the platform ingestion endpoints or can be managed and polled by SMS. When configured to use Plaspy server settings, the device will report to the shared Plaspy endpoint and port so Plaspy can present real time location and event data.

- Periodic location reports sent to d.plaspy.com or 54.85.159.138 on port 8888
- Event reporting such as tamper, motion, audio trigger and low battery alerts routed to Plaspy
- GPRS data sessions established after APN and GPRS mode are enabled so the device can deliver cloud telemetry
- SMS used as a fallback configuration and control channel for set up and troubleshooting
- Plaspy receives data on the shared port and automatically detects the device protocol for ingestion

## Common Configuration Workflow

1. Access the official Concox documentation or the vendor configuration method recommended for the LG300.
2. Ensure the SIM is active, has GPRS enabled, and you know the APN credentials for the operator.
3. Using SMS commands or the manufacturer tool, enter the Plaspy server address using either d.plaspy.com or 54.85.159.138.
4. Set the port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Configure reporting interval or timer to your target cadence to balance telemetry detail and battery life.
6. Apply or save the configuration and restart the device if the device requires a reboot to take changes.
7. Validate that the tracker reports to Plaspy by checking device status in the platform and confirming incoming telemetry.

## Example Configuration Commands

The LG300 accepts SMS configuration commands. The following public commands are provided in the order commonly used for initial setup. Labeling and order matter for predictable results. The reset command is optional and should be used only when you need to return the device to factory defaults.

- Optional factory reset as an initial step
```
FACTORY#
```

- Set the time zone to UTC 0
```
GMT,E,0#
```

- Set the operator APN
```
APN,[apn]#
```
If your carrier requires username and password include the optional fields as shown
```
APN,[apn],[apnu],[apnp]#
```
Note: [apn] is the operator APN string. [apnu] and [apnp] are optional APN username and password placeholders.

- Set the GPRS server using Plaspy domain (select this variant to use the domain)
```
SERVER,1,d.plaspy.com,8888,0#
```

- Alternatively set the GPRS server using Plaspy IP (select this variant to use the IP)
```
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds. Two valid formats are shown
```
TIMER,60#
```
or
```
TIMER,60,60#
```

- Enable GPRS mode
```
GPRSON,1#
```

- Verify GPRS and server parameters
```
GPRSSET#
```

Follow the command order above when performing an initial configuration. Use the factory reset only when starting from unknown settings or when explicitly required.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or supported parameters. Always verify commands against the device firmware in the field.
- The LG300 supports SMS based configuration which is useful for remote assets, but SMS delivery and carrier behavior can vary.
- Choose UDP or TCP based on your deployment needs and the device GUI or command tool option. Plaspy accepts either and will auto detect the tracker protocol.
- Plaspy uses the same port 8888 for all supported devices so the port value is consistent across models.
- Confirm APN credentials with the mobile operator if GPRS sessions fail and test with the GPRSSET# verification command.

## Why Use Plaspy with This Configuration

Using the Concox LG300 with Plaspy provides a straightforward way to collect durable asset telemetry from rugged field deployments. Pointing the device to Plaspy via the shared server settings and enabling GPRS reporting lets Plaspy ingest location, tamper, battery, and event alerts into consolidated dashboards for monitoring and reporting.

To learn more about Plaspy visit https://www.plaspy.com and for the latest device specific setup details and firmware notes check the manufacturer site https://www.iconcox.com/. Manufacturer specifications, setup methods, and firmware behavior can change over time so verify the current instructions with Concox before large scale deployment.
