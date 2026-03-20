---
slug: /concox/gv20/configuration
id: gv20-configuration
sidebar_label: Configuration
title: Concox - GV20 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Concox GV20 GPS tracker for use with Plaspy using SMS commands and server settings
keywords:
  - Concox GV20 configuration
  - Concox GV20 setup
  - GV20 Plaspy configuration
  - GV20 server configuration
  - Concox GPS tracker setup
  - GV20 SMS configuration
  - Plaspy tracker setup
  - vehicle tracking configuration
  - GPS tracker server settings
  - Concox GV20 integration
---

# Concox - GV20 Configuration

This page covers the public configuration context for using the Concox GV20 GPS tracker with Plaspy. It consolidates the Plaspy server settings you must apply and shows the example SMS commands that are commonly used to prepare a GV20 for reporting to Plaspy. Use this guide to understand the required server values and the practical SMS-based setup steps that appear in public device documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and the configuration tools vendors provide. The GV20 is a 3G vehicle tracker with features such as alert notifications and remote fuel or power cutoff; the commands below reflect commonly published SMS setup items for this model.

## Configuration Overview

The goal of configuring a GV20 for Plaspy is to point the device at Plaspy's shared server endpoint, ensure GPRS and APN settings are correct, and verify that the tracker is actively reporting. The example SMS commands below are the public, manufacturer-style instructions typically used to perform those actions.

- Configure the device APN so it can use mobile data for GPRS reporting.
- Set the device server to the Plaspy endpoint so position data is sent to Plaspy.
- Choose transport (UDP or TCP) and the required port consistent with Plaspy settings.
- Enable GPRS reporting and set a reporting timer to control update frequency.
- Verify configuration with the device's status command to confirm parameters.
- Optionally reset to factory defaults before configuring when preparing a new installation.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: The device may be configured using UDP or TCP on port 8888  
- Protocol detection: Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered and accessible GV20 unit installed or temporarily connected for setup.  
- An active SIM card with data (GPRS) enabled and SMS capability to send configuration messages.  
- The mobile network operator APN information for the SIM (APN, username, password) to populate device APN fields.  
- Access to the manufacturer's SMS command method or configuration tool as provided in Concox documentation.  
- A means to send and receive SMS messages to the device's SIM number for command confirmation.  
- Basic information about the installation such as desired reporting interval and whether UDP or TCP is preferred.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the GV20 will be pointed at Plaspy's shared server endpoint and reporting port so the platform can ingest its position and event messages. Plaspy's automatic protocol detection handles protocol differences between trackers so the same port can be used across many device models.

- The tracker sends GPRS data to either d.plaspy.com or the Plaspy server IP.  
- Data is transmitted over the selected transport (UDP or TCP) to port 8888.  
- Plaspy receives and automatically detects the tracker protocol to parse messages.  
- Reporting intervals and event triggers determine how frequently the device sends updates.  
- Device events and location updates become visible in the Plaspy platform once the device successfully connects.

## Common Configuration Workflow

1. Access the official Concox configuration method for the GV20, typically SMS-based commands or the manufacturer's configuration utility.  
2. Set the device APN using the operator APN parameters so the tracker can establish a GPRS connection.  
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 and set the server port to 8888.  
4. Choose UDP or TCP on devices that require a transport selection and save the choice.  
5. Enable GPRS reporting and set the desired reporting timer (for example 60 seconds) and then apply/save the configuration.  
6. Restart the tracker if the manufacturer instructions indicate a reboot is required to apply new settings.  
7. Validate that the device reports to Plaspy by checking the device status in Plaspy after the unit attempts to connect.

## Example Configuration Commands

To set the GV20 via SMS, use the following public commands in the order shown. Commands are sent as SMS messages to the device's SIM number. Prefix or suffix characters must match the device firmware expectations; the examples below reflect commonly published formats.

1. (Optional) Reset to factory settings — use when preparing a fresh configuration:
```
FACTORY#
```

2. Set the time zone to UTC-0:
```
GMT,E,0#
```

3. Set the mobile operator APN. Replace placeholders as required:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
- {{apn}} is the mobile data APN for the SIM.  
- {{apnu}} and {{apnp}} are optional APN username and password placeholders; include them only if required by your operator.

4. Set the GPRS server using the Plaspy domain (preferred by hostname):
```
SERVER,1,d.plaspy.com,8888,0#
```

   Or set the GPRS server using the Plaspy server IP:
```
SERVER,0,54.85.159.138,8888,0#
```

5. Set the update/reporting timer to every 60 seconds (two alternative formats are commonly published):
```
TIMER,60#
```
or
```
TIMER,60,60#
```

6. Enable GPRS mode so the device uses mobile data to send updates:
```
GPRSON,1#
```

7. Check current GPRS parameters and server settings:
```
GPRSSET#
```

Note: Keep the command order when performing an initial setup (for example, set APN first, then server, then timer and enable GPRS). The factory reset command is optional and should be used only when you intend to return the device to factory defaults before reconfiguration.

## Configuration Notes

- SMS-based configuration is a commonly published Concox method; follow the exact command syntax required by the GV20 firmware.  
- Firmware revisions and regional hardware variants may change available commands or required command formats; consult Concox documentation if a command does not behave as expected.  
- Choose UDP or TCP based on your installation needs; Plaspy accepts either transport on port 8888 and auto-detects the protocol.  
- Remember to replace APN placeholders ({{apn}}, {{apnu}}, {{apnp}}) with your mobile operator values when sending APN commands.  
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol, so the main unique settings per device are the APN, transport selection, and reporting interval.

## Why Use Plaspy with This Configuration

Configuring a Concox GV20 to report to Plaspy provides a straightforward path to centralized vehicle visibility, event monitoring, and operational oversight. Using the shared Plaspy server endpoint and the example SMS commands above allows the GV20 to send location and event updates into the Plaspy platform where they can be tracked, analyzed, and managed alongside other devices.

To learn more about Plaspy and how this configuration connects into the broader platform, visit https://www.plaspy.com. For the latest device-specific commands, firmware notes, and manufacturer instructions for the Concox GV20, verify current information at the official Concox website https://www.iconcox.com/ because setup methods and firmware behavior can change over time.
