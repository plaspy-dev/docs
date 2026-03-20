---
slug: /castel/idd_213e/configuration
id: idd_213e-configuration
sidebar_label: Configuration
title: Castel - IDD-213E Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect Castel IDD-213E to Plaspy using domain or IP and SMS configuration
keywords:
  - Castel IDD-213E configuration
  - Castel IDD-213E setup for Plaspy
  - Castel tracker configuration
  - Castel GPS tracker setup
  - Plaspy device configuration
  - vehicle diagnostic tracker configuration
  - 3G GPS tracker setup
  - fleet tracking Castel IDD-213E
  - SMS based tracker configuration
  - OBD tracker configuration
---

# Castel - IDD-213E Configuration

This page documents the public configuration context for using the Castel IDD-213E with the Plaspy platform. It focuses on the practical server settings and the basic SMS configuration flow published for the IDD-213E so you can point the device at Plaspy and verify connectivity. Use this guide together with the device manual and the manufacturer toolset for full setup and installation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side configuration steps for the IDD-213E can vary by firmware version, hardware revision, installation type, and vendor tools. The IDD-213E supports SMS configuration and 3G connectivity, and the public SMS commands below show how to set APN and server values for Plaspy.

## Configuration Overview

The goal of this configuration process is to prepare the IDD-213E so it can reliably communicate with Plaspy and appear in the platform for live tracking and diagnostics. The public steps center on setting cellular APN and the Plaspy server endpoint, validating connectivity, and confirming that data arrives at Plaspy.

- Set APN and GPRS parameters so the device can use its 3G connection to send data to Plaspy.
- Configure the IDD-213E to report to the central Plaspy server endpoint by domain or IP.
- Choose the transport (UDP or TCP) as required and set the common Plaspy port.
- Verify configuration using the device SMS query command and by checking the device status in Plaspy.
- Ensure the device can read vehicle diagnostic data and send it to the backend once it is connected.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and installed IDD-213E with access to the vehicle OBD port or installation point.
- An active SIM card with a data plan and correct APN values for your mobile operator.
- Access to the device ID to derive the default secret key used for SMS instructions.
- Ability to send and receive SMS from the installer phone for SMS based configuration.
- The official Castel documentation or configuration tool provided by the vendor for reference.

## How This Tracker Connects to Plaspy

The IDD-213E is configured to report its location and diagnostic information to the shared Plaspy server endpoint and port. Configuration typically sets APN and server details on the device and verifies that the device can establish a GPRS/3G session to send packets to Plaspy.

- The device uses its cellular 3G link and configured APN to open GPRS data connectivity.
- The IDD-213E is pointed to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport is selected as UDP or TCP depending on the device or installer preference.
- Once connected, the device transmits tracking and diagnostic messages to Plaspy where protocol detection occurs automatically.
- Plaspy receives device messages on the shared port and presents location and event data in the platform.

## Common Configuration Workflow

1. Obtain the official Castel configuration method or software and review the device manual for SMS and GPRS settings.
2. Confirm the device ID and derive the default SMS secret key (the IDD-213E uses the last 6 ASCII characters of the device ID as the default secret key for SMS commands).
3. Enter the Plaspy server by domain d.plaspy.com or by IP 54.85.159.138 as supported by the device.
4. Set the port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device using SMS or the manufacturer tool.
6. Restart the device if the procedure or firmware requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by querying the device for GPRS settings and confirming the device appears in the Plaspy platform.

## Example Configuration Commands

The IDD-213E supports SMS based configuration. The public SMS commands below show how to set APN and server values and how to query the current GPRS settings. The default secret key for SMS instructions is the last 6 ASCII characters of the device ID. Replace [SecretKey] with that value and [apn], [apnu], [apnp] with your operator APN, username, and password as needed.

- Set APN and server IP or domain (example uses Plaspy IP and port). Replace placeholders before sending:

```
*[SecretKey]#set gprs#[apn],[apnu],[apnp],54.85.159.138,8888*
```

or, if you prefer to use the Plaspy domain:

```
*[SecretKey]#set gprs#[apn],[apnu],[apnp],d.plaspy.com,8888*
```

- Check current GPRS settings on the device:

```
*[SecretKey]#get gprs#*
```

Notes on placeholders:
- [SecretKey]: the device SMS password, by default the last 6 ASCII characters of the device ID.
- [apn]: the mobile operator APN string required for data.
- [apnu] and [apnp]: optional APN username and password if your operator requires them.

## Configuration Notes

- Firmware differences may change available SMS commands or command syntax; always check the device manual for your firmware revision.
- The IDD-213E supports SMS based setup as shown, but manufacturers often provide PC tools or configuration apps as alternatives.
- Choose UDP or TCP based on installer guidance or network conditions; both transports are supported on port 8888.
- Plaspy uses the same port for all devices and automatically detects the tracker protocol, so pointing the device to d.plaspy.com or 54.85.159.138 on port 8888 is sufficient for initial connectivity.
- Keep APN and credential information private and confirm operator requirements before pushing changes.

## Why Use Plaspy with This Configuration

Using the Castel IDD-213E with Plaspy provides unified backend handling for location and diagnostic data so fleet managers can combine vehicle diagnostics and tracking in a single platform. Plaspy’s centralized server configuration simplifies device provisioning because supported trackers report to the same endpoint and Plaspy auto detects the protocol, reducing per-device customization.

To learn more about Plaspy and its device compatibility, visit https://www.plaspy.com. For the latest Castel device specific methods, firmware notes, and official commands verify details with Castel at http://www.castelecom.com/ as manufacturer documentation and firmware behavior can change over time.
