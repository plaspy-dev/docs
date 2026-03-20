---
slug: /eelink/tk319/configuration
id: tk319-configuration
sidebar_label: Configuration
title: EElink - TK319 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for EElink TK319 tracker showing Plaspy server settings, SMS commands, and practical configuration steps
keywords:
  - EElink TK319 configuration
  - EElink TK319 server configuration
  - EElink TK319 setup for Plaspy
  - EElink GPS tracker configuration
  - TK319 SMS configuration
  - TK319 APN settings
  - GPS tracker server settings
  - Plaspy device configuration
  - fleet tracker TK319
  - vehicle tracking TK319
---

# EElink - TK319 Configuration

This page documents the public configuration context for using the EElink TK319 with Plaspy. It collects the Plaspy server values and the common, publicly available SMS commands used to point the TK319 to the Plaspy platform so the device can report location and alarms to your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol; however, manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. Where the TK319 supports SMS configuration, the commands below are the publicly documented examples you can use to prepare the tracker for Plaspy.

## Configuration Overview

Preparing a TK319 for Plaspy integration is primarily about configuring network access (APN), pointing the device to the Plaspy server endpoint, and validating that the tracker sends regular updates. The TK319 supports SMS-based configuration which is commonly used in field deployments to set these values without specialized tools.

- Configure the operator APN so the device can access GPRS/WCDMA data services
- Set the tracker server to the Plaspy endpoint (domain or IP) and the Plaspy port
- Choose the transport (UDP or TCP) if the device requires an explicit transport selection
- Set a location update interval and enable regular reporting to verify connectivity
- Use the PARAM verification command or platform logs to confirm the device is visible in Plaspy

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Note that Plaspy uses the same port 8888 for all supported devices and the platform automatically detects the tracker protocol once the device connects.

## Typical Requirements Before Setup

- A TK319 unit that is powered and has a charged internal battery or is connected to vehicle power
- A valid SIM card with an active data plan and SMS capability inserted in the device
- APN credentials for the mobile operator (APN name and optional user and password)
- Ability to send SMS to the device or access to the official EElink configuration tool provided by the vendor
- Access to Plaspy account details to confirm device visibility after configuration

## How This Tracker Connects to Plaspy

The TK319 uploads location and event data over the cellular network to the Plaspy server endpoint and port. Once the device is pointed at d.plaspy.com or the Plaspy IP and uses port 8888, Plaspy will receive the incoming device traffic and automatically determine the correct protocol.

- Periodic location updates are sent to the Plaspy server on port 8888
- Alarms and event reports such as ACC status or geofence events can be sent to Plaspy for platform visibility
- The device uses the configured APN and mobile data connection to reach d.plaspy.com or 54.85.159.138
- Plaspy automatically detects the tracker protocol so explicit protocol selection on the server side is not required, but the device may require a UDP or TCP selection locally
- Regular timer-based uploads (for example every 60 seconds) help verify continuous connectivity in the Plaspy platform

## Common Configuration Workflow

1. Confirm the device is powered, has a SIM with data and SMS enabled, and you can send SMS to the unit.
2. Access the official EElink configuration method for the TK319 (SMS commands or vendor tool) to make settings changes.
3. Enter the Plaspy server address by using either d.plaspy.com or the Plaspy IP 54.85.159.138 as the SERVER target.
4. Set the Plaspy port to 8888 in the device configuration.
5. Choose UDP or TCP on the device if a transport selection is required by the TK319 firmware.
6. Apply or save the configuration and restart the device if required by the device or firmware.
7. Validate connectivity by checking PARAM response, observing device data in Plaspy, or confirming periodic updates arrive in the platform.

## Example Configuration Commands

The TK319 supports SMS-based configuration. The following public SMS commands are provided by the manufacturer and preserve placeholders where applicable. Send each command as a separate SMS to the device phone number. Preserve the trailing hash # where shown.

1. Optional factory reset (use only when needed)
```
FACTORY#
```

2. Set the time zone to UTC 0 (example)
```
GMT,E,0#
```

3. Set the operator APN. Replace the placeholder [apn] with your operator APN. If your operator requires a username and password, include the optional fields [apnu] and [apnp] in order.
```
APN,[apn]# 
```
Or with optional username and password:
```
APN,[apn],[apnu],[apnp]#
```
(Explanation: [apn] = APN name. [apnu] = APN username if required. [apnp] = APN password if required.)

4. Set the GPRS server to the Plaspy domain on port 8888 (use this form to point to the domain)
```
SERVER,1,d.plaspy.com,8888#
```

5. Or set the GPRS server to the Plaspy IP on port 8888 (alternative to the domain)
```
SERVER,0,54.85.159.138,8888#
```

6. Set the periodic location upload interval to 60 seconds
```
TIMER,60#
```

7. Check current parameters on the device
```
PARAM#
```

Follow the exact command order the manufacturer recommends when performing initial setup; for many deployments APN and server settings are required before you confirm connectivity.

## Configuration Notes

- Firmware and hardware revisions may change the exact SMS syntax or available parameters; always verify commands against your device paperwork.
- The TK319 supports SMS-based configuration as shown; vendor tools or remote configuration via server may also be available depending on firmware and purchase options.
- Choose UDP or TCP on the device if required by the firmware; Plaspy accepts both transports but the device may require an explicit selection.
- Plaspy uses the same port 8888 across supported devices; this simplifies server-side configuration for multi-model fleets.
- Use PARAM# or the device response SMS to confirm the APN, server, and timer values before relying on platform data.

## Why Use Plaspy with This Configuration

Using the EElink TK319 with Plaspy provides a straightforward route to integrate a compact 3G GPS tracker into a centralized fleet or asset management platform. Configuring the TK319 to report to the Plaspy server endpoint enables real-time visibility, event reporting, and consolidated monitoring across a fleet of devices, while Plaspy's automatic protocol detection reduces the need to match protocols manually.

Learn more about Plaspy and how the platform can work with GPS devices at https://www.plaspy.com. For the most current model-specific commands, firmware notes, and hardware details refer to the official EElink documentation at https://www.eelink.com.cn/ to verify the latest setup methods and manufacturer guidance.
