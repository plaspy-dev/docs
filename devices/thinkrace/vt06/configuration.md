---
slug: /thinkrace/vt06/configuration
id: vt06-configuration
sidebar_label: Configuration
title: ThinkRace - VT06 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for connecting the ThinkRace VT06 to Plaspy with practical server and SMS setup steps
keywords:
  - ThinkRace VT06 configuration
  - ThinkRace VT06 setup
  - ThinkRace VT06 server configuration
  - VT06 Plaspy setup
  - ThinkRace GPS tracker configuration
  - vehicle tracking VT06
  - VT06 APN setup
  - VT06 SMS commands
  - Plaspy device configuration
  - Plaspy tracker compatibility
---

# ThinkRace - VT06 Configuration

This page documents the public configuration context for using the ThinkRace VT06 with Plaspy. It focuses on the shared server settings, the practical steps required to point the tracker to Plaspy, and the example SMS commands published for the VT06. Use this guide to prepare the device for platform visibility and to validate connectivity after configuration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary depending on firmware version, hardware revision, installation type, and vendor configuration tools. The VT06 supports SMS based configuration commands and GPRS APN settings, so confirm your device firmware and the preferred configuration method before applying changes.

## Configuration Overview

This configuration process prepares the VT06 to send location and event data to Plaspy by setting the device APN, server endpoint, port, and reporting interval. The public commands below are an example SMS workflow used by many VT06 installations and should be adapted where manufacturer tools or updated firmware require different formats.

- Point the VT06 to the Plaspy server endpoint so tracking data is routed to Plaspy.
- Configure the device APN and optional APN credentials so the tracker has GPRS data connectivity.
- Set the reporting interval to control how often the device sends position updates to Plaspy.
- Use the provided SMS check command to verify configuration on the device after changes.
- Optionally perform a factory clear as an initial step when preparing a device for new deployment.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

These values are the public Plaspy connection settings used for the VT06 setup described on this page.

## Typical Requirements Before Setup

- A powered and accessible VT06 device with SMS configured for remote commands.
- An active SIM card with data enabled and the correct APN for your mobile operator.
- Access to the device phone number to send SMS configuration commands.
- Knowledge of your operator APN and optional APN username and password (if required by carrier).
- Confirmation of the VT06 firmware version or manufacturer documentation to ensure command syntax matches your device.
- If available, access to official ThinkRace configuration tools or instructions from your installer.

## How This Tracker Connects to Plaspy

The VT06 is configured to send its location and event reports to the shared Plaspy server endpoint and port so Plaspy can ingest and display device telemetry. Once the device is pointed to the Plaspy server and has an active data connection, Plaspy identifies the tracker protocol automatically and starts processing incoming messages.

- The tracker uses the configured APN to establish a GPRS data session and connect to the Plaspy server.
- Location updates and alarms are sent to d.plaspy.com or the server IP 54.85.159.138 on port 8888.
- You can choose UDP or TCP as the transport method depending on device settings and network environment.
- Plaspy detects the tracker protocol automatically so no protocol selection is required in the platform.
- After successful configuration the device becomes visible and reportable in Plaspy for monitoring and playback.

## Common Configuration Workflow

1. Access the official ThinkRace configuration method or tools described by the manufacturer or your installer, or prepare an SMS-capable phone to send commands.
2. Configure the device APN using the APN command and include APN username and password when applicable.
3. Enter the Plaspy server endpoint by sending d.plaspy.com or the server IP 54.85.159.138 into the device configuration, and set the destination port to 8888.
4. Choose UDP or TCP on the device if the tracker requires an explicit transport selection.
5. Set the desired reporting interval such as 60 seconds and any other operational parameters needed for your deployment.
6. Apply or save the configuration on the device, then restart the tracker if required by the device firmware.
7. Validate that the tracker reports to Plaspy by using the device check command or by confirming device visibility in the platform.

## Example Configuration Commands

The VT06 model supports SMS based configuration. The following example commands are the publicly published sequence for initial setup. Send these as SMS messages to the device number in the order shown when preparing the tracker for Plaspy.

1. Optional factory reset (perform only when needed as an initial cleanup)
```
clear
```

2. Set the operator APN. Replace [apn] with your carrier APN. If your carrier requires a username and password, include [apnu] and [apnp] respectively.
```
APN,[apn],[apnu],[apnp]
```
Note: If no APN username or password is required, omit the [apnu] and [apnp] placeholders and send:
```
APN,[apn]
```

3. Set the GPRS server to Plaspy using the server IP and port. This tells the VT06 to send data to Plaspy.
```
IP1,54.85.159.138,8888
```
Alternatively, if your VT06 firmware accepts a domain name, use:
```
IP1,d.plaspy.com,8888
```

4. Set the update interval to 60 seconds as an example reporting rate
```
ITV,60
```

5. Verify or check current settings on the device with the status command
```
C
```

Send each command as a separate SMS message to the VT06 device. Confirm responses where the device echoes configuration or provides an OK message.

## Configuration Notes

- Manufacturer command syntax may vary by firmware version; always confirm commands with current ThinkRace documentation for your device revision.
- The VT06 supports SMS based configuration as shown here, but some installations may use a configuration tool or installer software supplied by ThinkRace or resellers.
- Choose TCP or UDP based on network behavior and any guidance from your connectivity provider; Plaspy accepts either transport on port 8888 and will detect the tracker protocol automatically.
- Keep APN credentials and SIM settings private and test connectivity in a controlled environment before deploying devices in the field.
- If you perform a factory reset with the clear command, reapply APN and server settings afterwards as resets will remove prior configuration.

## Why Use Plaspy with This Configuration

Using the ThinkRace VT06 with Plaspy gives organizations centralized visibility into vehicle location, event alerts, and historical playback. Configuring the VT06 to point to Plaspy provides a straightforward way to consolidate tracking data from deployed devices and use Plaspy features for monitoring, reporting, and operational oversight.

To learn more about Plaspy and platform features visit https://www.plaspy.com. Verify the latest device specific configuration methods, firmware behavior, and detailed command syntax at the ThinkRace website https://www.thinkrace.com/ to ensure accuracy for your VT06 firmware and installation.
