---
slug: /aoya/t2/configuration
id: t2-configuration
sidebar_label: Configuration
title: AoYa - T2 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configure the AoYa T2 GPS tracker for Plaspy with server settings, SMS commands, and setup checklist
keywords:
  - AoYa T2 configuration
  - AoYa T2 setup
  - AoYa T2 server configuration
  - AoYa T2 Plaspy setup
  - AoYa T2 GPS tracker configuration
  - Plaspy GPS integration
  - vehicle tracker setup guide
  - GSM GPRS tracker configuration
  - SMS configuration commands
  - APN and server setup
---

# AoYa - T2 Configuration

This page covers the public configuration context for using the AoYa T2 GPS tracker with the Plaspy platform. It summarizes the practical server settings, required prechecks, and the SMS configuration commands that are commonly used to point an AoYa T2 to Plaspy so the device can report location and status.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use the commands and workflow here as practical public guidance and verify device-specific details with the manufacturer as needed.

## Configuration Overview

This configuration process prepares an AoYa T2 to communicate reliably with Plaspy by setting the network APN, server endpoint, transport, and any required device parameters. The steps below are focused on enabling GPRS connectivity, directing device reports to Plaspy, and validating that the device appears in the platform.

- Configure the device APN and optional APN credentials so it can use GSM GPRS data.
- Set the Plaspy server endpoint and port so location and status messages are delivered to Plaspy.
- Choose UDP or TCP transport on the device if required and switch the tracker to GPRS reporting mode.
- Save and apply the configuration, then verify connectivity and reporting with a status check.
- Use SMS based commands (as provided by AoYa) or the official manufacturer tool to perform these actions.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport: device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when devices send data
- Note: Plaspy uses the same port for all supported devices which simplifies server configuration across tracker models

## Typical Requirements Before Setup

- A powered AoYa T2 device with a working SIM card that has GPRS data enabled and SMS capability
- APN, APN username, and APN password details from the mobile operator
- Knowledge of the device default password (the sample configuration uses 123456)
- Access to the device via the manufacturer supported configuration method such as SMS commands or vendor software
- A stable network environment where the device can reach d.plaspy.com or 54.85.159.138 on port 8888

## How This Tracker Connects to Plaspy

The AoYa T2 is configured to send its location and status messages over the GSM GPRS network to the shared Plaspy server endpoint and port. Plaspy receives those messages, automatically determines the correct protocol for the device, and then maps the data into the platform for monitoring and reporting.

- Device sends GPRS packets to d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on the device setting and network conditions
- Plaspy automatically detects the tracker protocol and processes incoming messages
- Once connected, position updates and device events become visible in Plaspy
- Regular validation commands or status checks confirm the device is reporting correctly

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software (AoYa SMS commands or vendor tool).
2. Ensure the device has power and a working SIM with the operator APN information available.
3. Send or enter the APN information using the manufacturer method so the device can establish GPRS.
4. Enter the Plaspy server as d.plaspy.com or 54.85.159.138 and set the port to 8888.
5. Choose UDP or TCP on the device if it requires a transport selection and switch the tracker to GPRS reporting mode.
6. Apply or save the configuration and restart the device if the device instructions require a reboot.
7. Validate that the device reports to Plaspy by using the manufacturer verification command or by checking the device status in Plaspy.

## Example Configuration Commands

The AoYa T2 supports SMS based configuration. The sample commands below use the device default password 123456. Replace placeholders where noted and send each line as an SMS to the tracker number. Maintain the order below for initial setup when applicable.

- Optional initial factory reset (only when you need to restore defaults):
```text
begin123456
```

- Set the time zone to UTC+0:
```text
time zone123456 0
```

- Set the operator APN (replace {{apn}} with your mobile operator APN):
```text
apn123456 {{apn}}
```

- Set the APN username and password if required by your operator (replace placeholders):
```text
up123456 {{apnu}} {{apnp}}
```

- Set the Plaspy GPRS server using the public Plaspy server IP and port:
```text
adminip123456 54.85.159.138 8888
```

- Switch to GPRS mode (UDP or TCP depending on the device firmware). Two variants shown by the manufacturer:
```text
gprs123456,1,1
```
or
```text
gprs123456
```

- Check current device settings (verification):
```text
check123456
```

Notes on placeholders:
- {{apn}} is the mobile operator APN string.
- {{apnu}} is the APN username if required by the operator.
- {{apnp}} is the APN password if required by the operator.
- The sample default device password shown here is 123456; change the password after setup if device security is a concern.

## Configuration Notes

- SMS based commands are provided by the manufacturer and are a common way to configure AoYa devices; confirm you have SMS access to the device phone number.
- Firmware versions and hardware revisions can change command syntax or behavior; consult the official AoYa documentation for firmware specific notes.
- Choose UDP or TCP based on your network reliability and the device firmware options; Plaspy will accept either transport on port 8888 and auto detect protocol.
- Keep APN credentials correct and test GPRS connectivity before relying on long term tracking.
- After initial setup, verify reporting in Plaspy to confirm the device is visible and updating as expected.

## Why Use Plaspy with This Configuration

Using the AoYa T2 with Plaspy provides a straightforward way to bring compact GPRS-based tracking data into a standard fleet and asset monitoring platform. Pointing the device to Plaspy's shared server and port makes initial integration simple, and Plaspy's automatic protocol detection helps reduce the need for device-specific server variations.

To learn more about Plaspy and how it handles device data, visit https://www.plaspy.com. For device specific commands, firmware details, and the latest manufacturer guidance, verify the current AoYa documentation at http://www.aoyagps.com/ as configuration methods and firmware behavior can change over time.
