---
slug: /topshine/mt101/configuration
id: mt101-configuration
sidebar_label: Configuration
title: TopShine - MT101 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopShine MT101 showing Plaspy server settings SMS commands and setup steps for platform connectivity
keywords:
  - TopShine MT101 configuration
  - TopShine MT101 setup
  - MT101 Plaspy configuration
  - TopShine GPS tracker configuration
  - MT101 server configuration
  - TopShine MT101 SMS commands
  - MT101 GPRS setup
  - TopShine motorcycle tracker setup
  - MT101 APN configuration
  - TopShine MT101 integration Plaspy
---

# TopShine - MT101 Configuration

This page documents the public configuration context for using the TopShine MT101 tracker with Plaspy. It compiles the Plaspy server settings you need, practical setup steps, and available SMS-based commands published for this model. Use this guide to prepare the tracker for connectivity and visibility in the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps for the MT101 can vary by firmware, hardware revision, installation type, and vendor tools, so combine the information here with the device documentation and your installer workflow. The MT101 supports SMS and GPRS configuration and uses a default SMS password in the published command set.

## Configuration Overview

This configuration establishes the MT101 so it can report location and events to Plaspy. The goal is to make the device reach Plaspy's shared server endpoint reliably, confirm reporting, and ensure the tracker is visible in the platform.

- Configure the device server endpoint and port so the MT101 can send GPRS reports to Plaspy.
- Provide the correct APN and, if required, APN credentials so the SIM card can establish a GPRS connection.
- Validate connectivity using the device SMS verification command and by confirming the device appears in Plaspy.
- Set reasonable update intervals to balance real time visibility and data usage.
- Optionally perform a factory reset or initial provisioning using the published SMS commands when starting from a new or unknown state.

## Plaspy Server Settings

- Server domain d.plaspy.com for tracker GPRS reporting to Plaspy
- Server IP 54.85.159.138 as an alternate server destination
- Port 8888 used for all devices in Plaspy
- Transport support for UDP or TCP; the MT101 may be configured to use either transport on port 8888
- Plaspy automatically detects the tracker protocol so devices can report without manual protocol selection in the platform

## Typical Requirements Before Setup

- A powered MT101 with the required wiring or battery connection and any optional relay or accessories installed
- At least one active SIM card configured for data and able to establish GPRS; MT101 supports two SIM cards and can switch networks
- APN information for the SIM operator, and APN username and password if required
- Access to SMS sending capability or the manufacturer configuration tool to send setup commands
- The device IMEI available for identification and for commands that require IMEI-based values
- A Plaspy account or access to the Plaspy platform to verify the device reports after configuration

## How This Tracker Connects to Plaspy

The MT101 is configured to send location and status reports over GPRS to the Plaspy server endpoint and port. Once the device has a working data connection and the correct server settings, Plaspy will automatically recognize the incoming protocol and make the device visible in the platform.

- The tracker posts GPRS data to d.plaspy.com or to the provided IP address on port 8888
- Plaspy uses the same port for all supported devices so a single port setting works across models
- Plaspy automatically detects the tracker protocol when the device starts sending data
- The device can be provisioned by SMS to set APN, server IP or domain, and reporting intervals
- After configuration the device appears in Plaspy where you can monitor location and events

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the MT101 (SMS commands are the common public method for this model).
2. Enter d.plaspy.com or 54.85.159.138 as the GPRS server depending on whether you prefer domain or IP configuration.
3. Set port 8888, which is the port Plaspy uses for all devices.
4. Choose UDP or TCP if the MT101 requires selection of transport during configuration.
5. Set the APN (and APN username and password if required) for the active SIM so GPRS can connect.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy by checking the platform for device activity or using the device verification SMS command.

## Example Configuration Commands

The MT101 can be configured by SMS using the device default password 000000 in the published command set. Commands below are presented in the public form provided by the manufacturer. Keep placeholders as shown and replace them with your values when sending SMS.

- Optional initial factory reset (use only if you want to restore factory defaults):
```text
W000000,990,099###
```

- Set device ID (manufacturer command expects the first 14 digits from IMEI). Note: the IMEI is required by manufacturer commands; Plaspy identifies devices using the device IMEI on the platform.
```text
W000000,010,<first 14 IMEI digits>
```

- Set the operator APN. Replace [apn] with your operator APN. If your APN requires a username or password, include [apnu] and [apnp] respectively. The command format accepts APN only or APN,username,password.
```text
W000000,011,[apn][,[apnu],[apnp]]
```

- Set the GPRS server to Plaspy. This example uses the Plaspy server IP and port as published. You may use the domain d.plaspy.com instead of the IP if preferred.
```text
W000000,012,54.85.159.138,8888
```

- Switch the device to GPRS mode (as required by the manufacturer for data reporting):
```text
W000000,013,2
```

- Set the device update interval. The example value here (6) comes from the public command set and should be adjusted per your reporting policy.
```text
W000000,014,6
```

- Verification command to request IMEI from the device:
```text
W000000,601
```

Notes on placeholders:
- [apn] is your mobile operator APN string.
- [apnu] is the APN username if the operator requires it.
- [apnp] is the APN password if required.
- \<first 14 IMEI digits> should be replaced by the first 14 digits the manufacturer command requests; retain the full IMEI for platform identification when needed.

## Configuration Notes

- SMS based configuration is a published public method for the MT101; you can also use any manufacturer tools or provisioning utilities that TopShine provides.
- Firmware revisions and hardware variants can change command formats or available options. Confirm command syntax for your device firmware version.
- When both domain and IP are available, using the domain d.plaspy.com can be more resilient to server IP changes; the IP 54.85.159.138 is provided as the public alternate destination.
- The MT101 supports two SIM cards and network switching; ensure the active SIM has an appropriate APN for data.
- Choose UDP or TCP transport per your device firmware options; Plaspy will automatically detect the incoming protocol on port 8888.

## Why Use Plaspy with This Configuration

Connecting the TopShine MT101 to Plaspy gives you a central place to monitor location, movement, and alerts for motorcycles and small vehicles. Using the shared Plaspy server settings and the public SMS configuration commands for MT101 allows straightforward provisioning and rapid validation of device reporting.

To learn more about Plaspy and how it organizes device data and monitoring, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and manufacturer details for the MT101, verify current information at the TopShine website https://www.gztopshine.com/.
