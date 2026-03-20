---
slug: /tzone/tz_avl11/configuration
id: tz_avl11-configuration
sidebar_label: Configuration
title: TZone - TZ-AVL11 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TZone TZ-AVL11 showing how to set up GPRS and SMS reporting to Plaspy with server settings and example commands
keywords:
  - TZone TZ-AVL11 configuration
  - TZone TZ-AVL11 setup
  - TZone tracker Plaspy
  - TZ-AVL11 server configuration
  - TZ-AVL11 GPS tracker setup
  - TZone vehicle tracking
  - TZ-AVL11 GPRS configuration
  - TZone tracker SMS setup
  - Plaspy device configuration
  - GPS tracker configuration guide
---

# TZone - TZ-AVL11 Configuration

This page covers the public configuration context for using the TZone TZ-AVL11 tracker with Plaspy. It collects the practical server settings and example commands you can use to point a TZ-AVL11 at Plaspy so the device can report location and status to the platform. Use this guide together with the tracker documentation and any installer notes you have from the device supplier.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The TZ-AVL11 supports GPRS TCP or UDP reporting and SMS configuration, so this page includes the common SMS command flow used to configure GPRS reporting to Plaspy.

## Configuration Overview

The configuration process prepares the TZ-AVL11 to send position and status messages to Plaspy so the device becomes visible and manageable in the platform. It typically involves setting the network APN, the device reporting interval, and the GPRS server endpoint and transport.

- Configure the SIM operator APN so the device can connect to mobile data.
- Set the location update interval appropriate for your use case.
- Point the tracker to the Plaspy server endpoint and port to deliver telemetry.
- Enable GPRS reporting mode so the tracker sends data over mobile IP.
- Verify connectivity and that the device appears in Plaspy using the shared server and port.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

These values are the public endpoint details you will use when configuring the TZ-AVL11 to report to Plaspy.

## Typical Requirements Before Setup

- A charged and powered TZ-AVL11 unit installed per manufacturer guidance.
- An active SIM card with data enabled and the correct APN for the mobile operator.
- Access to SMS messaging from the SIM or phone used to send configuration commands.
- The device firmware supports GPRS reporting and SMS configuration on your unit.
- Manufacturer configuration instructions or tools for initial setup if needed.
- A way to monitor device connectivity from Plaspy after configuration.

## How This Tracker Connects to Plaspy

The TZ-AVL11 can be configured to send position and event data to Plaspy over GPRS using either TCP or UDP. When configured correctly, the tracker will establish a session to the shared Plaspy server endpoint and begin reporting location updates at the configured interval.

- The device opens a connection to d.plaspy.com or to the server IP 54.85.159.138.
- Communications use port 8888 for all devices in the Plaspy environment.
- You can select UDP or TCP transport depending on device requirements; Plaspy will detect the protocol automatically.
- The tracker transmits periodic location packets and event messages to Plaspy for display and processing.
- Once reporting begins, the tracker becomes visible in the Plaspy interface for monitoring and alerting.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS configuration commands as supported by the TZ-AVL11.
2. Set the operator APN on the tracker so it can establish GPRS data sessions.
3. Enter the Plaspy server endpoint using either d.plaspy.com or 54.85.159.138 and set port 8888.
4. Choose the transport protocol UDP or TCP if the device requires a transport selection.
5. Set a suitable update interval for position reporting and apply or save the configuration.
6. Activate or enable GPRS reporting mode on the device and restart the unit if required.
7. Validate that the device reports to Plaspy and appears in the platform with expected updates.

If you are using SMS based configuration for initial setup, follow the example SMS command sequence shown below to set APN, reporting interval, server IP and port, and to activate GPRS mode.

## Example Configuration Commands

The TZ-AVL11 supports SMS based configuration. The following public commands are provided in the manufacturer content and can be sent as SMS messages from the device owner phone to the tracker. The default configuration password used in these commands is 000000 as shown. Preserve placeholders where applicable.

1. Set the operator APN
   - Use this command to set APN and optional APN user and APN password.
   - [apn] is the operator APN string. [apnu] and [apnp] are optional APN username and APN password.

```
*000000,011,[apn],[apnu],[apnp]#
```

   - If you do not need APN username or password, send:

```
*000000,011,[apn]#
```

2. Set the update interval to 60 seconds
```
*000000,018,60,999#
```
   - This sets reporting interval and an additional parameter used by the device. Keep the values as shown if 60 second updates are desired.

3. Set the GPRS server to Plaspy
   - This command configures the device to send data directly to Plaspy using the public server IP and port.

```
*000000,015,0,54.85.159.138,8888#
```

4. Activate GPRS reporting mode
```
*000000,016,1#
```

Notes on placeholders and defaults:
- [apn] should be replaced with the mobile operator APN for the SIM in the device.
- [apnu] and [apnp] are optional and should be included only if your operator requires them.
- The leading numeric password 000000 in these example commands is the factory style password shown in the public command set. Confirm the correct password for your unit if it was changed.

## Configuration Notes

- SMS based configuration is a common installer method for this model; keep a record of any password changes you make during setup.
- Firmware versions and hardware revisions can change command syntax or available parameters; verify commands with the current manufacturer documentation.
- Choosing TCP or UDP affects how the device maintains the connection; Plaspy accepts either and will detect the protocol automatically.
- Always confirm the correct APN for the SIM card before sending server or GPRS activation commands.
- After applying settings, allow a minute for the device to register on the network and begin reporting before performing validation checks.

## Why Use Plaspy with This Configuration

Using the TZ-AVL11 with Plaspy provides a straightforward path to vehicle and asset visibility. By configuring the tracker to report to Plaspy's shared server and port, organizations gain continuous location reporting, event alerts, and centralized monitoring without having to manage separate server endpoints for each device.

To learn more about Plaspy and how it can work with the TZ-AVL11, visit https://www.plaspy.com. For the most current device specific configuration commands, firmware behavior, and installation details, verify the manufacturer documentation at http://www.tzonedigital.com/ before deployment.
