---
slug: /appello/tk106/configuration
id: tk106-configuration
sidebar_label: Configuration
title: Appello - TK106 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Appello TK106 showing server settings and SMS commands to connect the tracker to Plaspy
keywords:
  - Appello TK106 configuration
  - Appello TK106 setup
  - TK106 Plaspy
  - TK106 server configuration
  - Appello GPS tracker setup
  - Vehicle tracking TK106
  - TK106 SMS configuration
  - TK106 GPRS setup
  - Plaspy tracker configuration
  - TK106 GPS platform setup
---

# Appello - TK106 Configuration

This page documents the public configuration context for using the Appello TK106 tracker with Plaspy. It pulls together practical setup information and the publicly available SMS commands used to point a TK106 device at the Plaspy platform so the device can report its location and status to your Plaspy account.

Plaspy uses a shared server endpoint and the same port across supported devices and automatically detects the tracker protocol. Manufacturer side configuration steps can vary by firmware version, hardware revision, installation type, or vendor tools, so treat the commands below as the public, manufacturer-provided steps commonly used for TK106 family devices.

## Configuration Overview

The configuration process prepares a TK106 to communicate reliably with Plaspy and to report regular position updates and status. For TK106 devices that support SMS and GPRS configuration, the public workflow typically uses SMS commands to set APN, server address, transport mode, and update interval.

- Configure the mobile operator APN so the tracker can use GPRS data
- Set the Plaspy server endpoint either by domain or by IP address
- Select transport mode UDP or TCP depending on device capability and network
- Set the reporting interval so location updates arrive at the desired frequency
- Verify settings and confirm the device can reach the Plaspy server
- Use a status command to confirm the tracker is operational after configuration

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP depending on the device configuration option  
- Plaspy automatically detects the tracker protocol so the device can be sent to d.plaspy.com or the IP and will be handled by the platform

All Plaspy devices use the same port for server communication and Plaspy will automatically detect the tracker protocol used by the device.

## Typical Requirements Before Setup

- A valid SIM card with a GPRS data plan inserted into the TK106 if using GPRS reporting
- The device battery charged or connected to a stable power source during setup
- Access to the device default password or current admin password (public examples often use 123456)
- Ability to send SMS commands to the device or access to the manufacturer configuration tool if available
- Manufacturer documentation or vendor guidance for the specific firmware revision installed

## How This Tracker Connects to Plaspy

The TK106 is configured to report its location and device status to the shared Plaspy server endpoint and port. Once APN and server fields are set, the tracker opens a GPRS connection and sends periodic reports to Plaspy where the data is parsed and displayed in the platform.

- The tracker uses GPRS to send position and status messages to d.plaspy.com or the server IP 54.85.159.138
- Communications are sent to port 8888 which Plaspy uses for all supported devices
- You can choose UDP or TCP transport on the device; Plaspy accepts either and detects protocol automatically
- The reporting interval determines how often position messages are sent to Plaspy
- A status or query command can be used to confirm the device is registered and communicating

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the TK106 such as SMS commands or a vendor tool.  
2. Ensure the device has a working SIM with GPRS service and that you know the device password.  
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.  
4. Set the server port to 8888 in the device configuration.  
5. Choose UDP or TCP if the SDK or device settings require a transport selection.  
6. Apply or save the configuration and restart the device if the device requires a reboot for changes to take effect.  
7. Validate that the device reports to Plaspy by checking device status in Plaspy and by using any available device status commands.

## Example Configuration Commands

The manufacturer provides SMS based commands for many TK106 devices. Below are the publicly available sample SMS commands and their purpose. Use the device admin password before each command. The examples use the public default password 123456 as shown in the original manufacturer guidance.

- Factory reset (optional initial setup)
```
123456begin
```
- Set the time zone to UTC 0
```
123456time zone 0
```
- Set the operator APN
```
123456apn {{apn}} {{apnu}} {{apnp}}
```
Explanation: keep the placeholders as provided. Replace {{apn}} with your operator APN name. If your operator requires username and password use {{apnu}} and {{apnp}} respectively. Omit optional placeholders if they are not required by your operator.

- Set the GPRS server to Plaspy by IP and port
```
123456adminip 54.85.159.138 8888
```
You can alternatively configure the device to use the domain d.plaspy.com if the tracker accepts domain names in its adminip or server command according to your firmware.

- Set UDP mode (device will use UDP transport)
```
123456gprsmode 1
```
If your device requires TCP you can switch mode according to the manufacturer command set.

- Set update interval to 60 seconds
```
123456t060s***n
```
This command sets periodic reporting to 60 seconds in the public sample. The exact suffix or format may vary by firmware.

- Check current device settings and status
```
123456status
```

Preserve the order shown above when performing an initial configuration where order matters. If your device uses a different admin password than the public default replace 123456 with your device password.

## Configuration Notes

- SMS based setup is widely used for TK106 family devices but vendor tools or PC software may also be available and can vary by firmware.
- The public default password shown in manufacturer examples is 123456; confirm and change the password as appropriate for your deployment.
- Use the APN placeholders {{apn}} {{apnu}} and {{apnp}} exactly as needed for your operator and regional SIM settings.
- Choose UDP or TCP according to your network reliability and device support; Plaspy accepts both and will detect the protocol automatically.
- Different firmware versions or hardware revisions may use slightly different command syntax or require vendor software for domain name support.

## Why Use Plaspy with This Configuration

Using the Appello TK106 with Plaspy provides a straightforward path to get device location and status into a centralized tracking platform. By applying the shared server settings and a consistent port, organizations can reduce configuration complexity and quickly bring devices online for monitoring, route oversight, and operational visibility.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Verify device specific configuration methods, firmware behavior, and manufacturer details on the official manufacturer site at http://www.cnjeo.com/ for the most current technical guidance.
