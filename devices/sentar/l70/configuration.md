---
slug: /sentar/l70/configuration
id: l70-configuration
sidebar_label: Configuration
title: Sentar - L70 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configuring the Sentar L70 GPS tracker for use with Plaspy including server settings and SMS commands
keywords:
  - Sentar L70
  - Sentar L70 configuration
  - Sentar L70 setup
  - Sentar L70 Plaspy
  - Sentar GPS tracker configuration
  - L70 server configuration
  - L70 setup guide
  - Sentar tracker integration
  - GPS tracker configuration
  - vehicle tracking L70
---

# Sentar - L70 Configuration

This page documents the public configuration context for using the Sentar L70 GPS tracker with the Plaspy platform. It summarizes the server settings Plaspy expects, the common SMS commands published for the L70, and practical steps to prepare the device so it can report location and status to Plaspy. Use this as a technical reference for basic setup and verification.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The example commands below reflect public SMS commands commonly used for Sentar L70 setup; verify details with Sentar documentation or vendor tools for device specific behavior.

## Configuration Overview

This configuration prepares the Sentar L70 to send its position and device events to Plaspy by setting network parameters, server endpoint, and reporting intervals. The L70 can be configured by SMS commands as shown in the public examples below, or by any manufacturer tool that supports the device.

- Configure the device APN and GPRS parameters so the L70 can use mobile data to reach the Plaspy server.
- Point the tracker to the Plaspy server domain or IP so packets are routed to Plaspy for processing.
- Set the upload or reporting interval so the device sends periodic location updates to Plaspy.
- Validate connectivity and server reachability so the tracker appears in the Plaspy platform.
- Apply and save settings and restart the device if required to ensure the new configuration is active.

## Plaspy Server Settings

- Server domain d.plaspy.com for tracker reporting and connection.
- Server IP 54.85.159.138 as an alternative endpoint to the domain.
- Port 8888 used by Plaspy for all supported devices.
- Transport support over UDP or TCP on port 8888 depending on device capability.
- Plaspy automatically detects the tracker protocol so devices that support different protocol variants can be used without manual protocol selection.
- All devices in Plaspy use the same port to simplify device configuration and platform routing.

## Typical Requirements Before Setup

- A powered Sentar L70 device and physical access to send SMS commands or access manufacturer configuration tools.
- An active SIM card with mobile data configured for GPRS if you intend to use the device on the cellular network.
- Knowledge of the device password used for SMS configuration (the public examples use 123456 as the default password).
- Manufacturer documentation or access to Sentar configuration tools for firmware specific options and features.
- A way to verify network connectivity from the device to the Plaspy endpoint, for example by checking device status responses or platform visibility.
- If you use SMS setup, ensure the sending phone number is allowed by any device security settings.

## How This Tracker Connects to Plaspy

When configured, the L70 uses its mobile network connection to send location and device data to the Plaspy server endpoint. Plaspy receives the device packets on the shared server and port and maps them to the correct account and device using the device identifier and protocol detection.

- The device is set to report to d.plaspy.com or 54.85.159.138 on port 8888.
- Data can be sent over UDP or TCP depending on the device transport selection.
- Plaspy automatically detects the tracker protocol so no manual protocol selection on the platform is required.
- Periodic uploads are scheduled by setting the upload interval so the device sends regular updates to Plaspy.
- After successful configuration the device becomes visible in Plaspy for monitoring and event reporting.

## Common Configuration Workflow

1. Access the official Sentar configuration method or software, or prepare to send SMS commands to the device per Sentar instructions.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP on the device if transport selection is required.
5. Configure APN and any operator parameters so the device has GPRS connectivity if using mobile data.
6. Apply or save the configuration and restart the device if required by the device or firmware.
7. Validate that the device reports to Plaspy by checking device status replies and confirming visibility on the Plaspy platform.

## Example Configuration Commands

The following SMS commands are the public examples provided for Sentar L70 setup. These commands use the device password 123456 in the samples. If the device password has been changed, replace 123456 with the active password.

1. Optional initial factory reset (use only when required)
```
pw,123456,factory#
```

2. Set the time zone to UTC 0
```
pw,123456,lz,0,0#
```

3. Check the IMSI to read MCC and MNC
```
pw,123456,imsi#
```

4. Set the APN and operator parameters
Note: [apn], [apnu], and [apnp] are placeholders. Replace them with your operator APN, username, and password. The trailing xxxyy represents MCC and MNC concatenated where required.
```
pw,123456,[apn],[apnu],[apnp],xxxyy#
```

5. Set GPRS server to the Plaspy IP and port
This command points the tracker to the Plaspy server IP and the shared port 8888.
```
pw,123456.ip,54.85.159.138,8888#
```

6. Set the upload interval to 300 seconds
```
pw123456,upload,300#
```

7. Verify settings and status
```
pw,123456,ts#
```

Preserve the placeholders exactly when composing the APN command and replace them with your operator values. The factory reset command is optional and should be used only if you need to restore default settings.

## Configuration Notes

- Sentar L70 public examples show SMS based configuration; manufacturer tools or web interfaces may also be available depending on vendor and firmware.
- Firmware and hardware revisions can change exact command syntax and available options; always confirm with the manufacturer documentation.
- Choose UDP or TCP based on your installation needs and any guidance from the device firmware; Plaspy accepts either and detects the protocol automatically.
- The Plaspy server domain and IP are both acceptable endpoints; using the domain allows operator DNS resolution while the IP can be used where DNS is restricted.
- Keep the device password secure and update it according to your security practices after initial setup if supported by the device.

## Why Use Plaspy with This Configuration

Configuring the Sentar L70 to report to Plaspy provides a consistent server endpoint and a platform that automatically detects the device protocol, which simplifies fleet onboarding and operational monitoring. For organizations that need ongoing visibility and periodic reporting, using the shared Plaspy server and port reduces per device configuration overhead.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup instructions and commands on the official Sentar website http://www.sentarsmart.com/ before performing production deployments.
