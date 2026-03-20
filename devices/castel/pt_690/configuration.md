---
slug: /castel/pt_690/configuration
id: pt_690-configuration
sidebar_label: Configuration
title: Castel - PT-690 Configuration
sidebar_class_name: menu_item_tracker
description: Public guidance for configuring Castel PT-690 to report to Plaspy using shared server settings and SMS commands
keywords:
  - Castel PT-690 configuration
  - PT-690 setup Plaspy
  - Castel GPS tracker configuration
  - PT-690 server configuration
  - Plaspy tracker setup
  - PT-690 SMS configuration
  - GPS tracker platform setup
  - Pet tracker Plaspy integration
  - PT-690 GPRS configuration
  - Castel PT690 tracking setup
---

# Castel - PT-690 Configuration

This page describes the public configuration context for using the Castel PT-690 portable pet GPS tracker with Plaspy. It collects the practical, public setup information you need to point a PT-690 at the Plaspy service so the device can report location and status to your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps may vary depending on firmware version, hardware revision, installation type, and vendor tools. The PT-690 supports SMS-based configuration in its public documentation, and this page includes those SMS command examples and practical guidance for applying the Plaspy server settings.

## Configuration Overview

This section outlines the practical goal of configuring a PT-690 for Plaspy: prepare the device to use the mobile data network, set the Plaspy server as the reporting endpoint, and verify the tracker is visible in Plaspy. Use the manufacturer's SMS commands or official configuration utility to set the APN and server information so the tracker can establish a GPRS session and send telemetry to Plaspy.

- Configure the device APN and server address so it can connect over GPRS to Plaspy.
- Ensure the device is reachable and can open a data session to the Plaspy endpoint.
- Validate that the PT-690 reports location updates and status messages to the Plaspy platform.
- Use the provided SMS commands or vendor tool to set and check GPRS/server parameters.
- Confirm transport selection (UDP or TCP) on the device if required by the firmware.

## Plaspy Server Settings

When configuring the PT-690 for Plaspy, use the following public server settings in the device configuration:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections

Plaspy uses the same port for all supported devices and will detect the correct protocol automatically when the device connects.

## Typical Requirements Before Setup

- A charged PT-690 with a valid SIM card capable of GPRS data.
- Access to the device ID so you can compute the SMS secret key when required.
- Ability to send SMS commands to the tracker or access to the official manufacturer configuration tool.
- Knowledge of the correct APN values for the SIM card used (APN, APN username, APN password).
- A Plaspy account or onboarding details so you can confirm the device appears in the platform after configuration.
- A basic test plan to validate location reporting and connectivity after setting the server.

## How This Tracker Connects to Plaspy

The PT-690 is configured to send its location and device data to the Plaspy shared server endpoint and port. Once the device has valid mobile data connectivity and the correct GPRS/server settings, it will open a connection to Plaspy and deliver periodic updates so the device is visible and manageable within the Plaspy platform.

- Device uses GPRS to open a data session and send telemetry to d.plaspy.com or 54.85.159.138.
- All devices report to port 8888 on Plaspy; the PT-690 should be set to use that port.
- The tracker may use UDP or TCP transport depending on device firmware and your selection; Plaspy will accept either.
- Plaspy automatically detects the protocol and processes incoming position and status packets.
- After configuration, verify the tracker appears in Plaspy and sends regular location updates.

## Common Configuration Workflow

1. Access the official Castel configuration method for the PT-690, typically SMS commands or the vendor utility. Confirm the SMS secret key method and device ID location.
2. Prepare APN credentials for the SIM card and determine whether the device needs APN username and password placeholders.
3. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device settings.
4. Set the device port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device and restart the tracker if the device or documentation recommends it.
6. Validate connectivity by requesting the device settings or monitoring the device in Plaspy to confirm it reports to the platform.

If you are using SMS commands, follow the device example commands below to set and verify GPRS and server parameters.

## Example Configuration Commands

The PT-690 supports SMS-based configuration in the public documentation. The default secret key for SMS instructions is the last 6 ASCII characters of the device ID. Replace [SecretKey] with that value and [apn], [apnu], [apnp] with your SIM APN, APN username, and APN password as applicable.

- Set APN settings and the Plaspy server IP and port
```text
*[SecretKey]#set gprs#[apn],[apnu],[apnp],54.85.159.138,8888*
```

- Verify the GPRS and server settings on the device
```text
*[SecretKey]#get gprs#*
```

Notes about placeholders:
- [SecretKey] — last 6 ASCII characters of the device ID used as the SMS command secret.
- [apn] — your mobile operator APN name.
- [apnu] — APN username if required by the operator; leave empty if not used.
- [apnp] — APN password if required; leave empty if not used.

These commands reflect the public SMS syntax shown in the PT-690 documentation. If your firmware or vendor app uses a different syntax, use the official Castel materials.

## Configuration Notes

- SMS-based configuration is publicly documented for the PT-690; follow the exact syntax and security rules (secret key) shown by the manufacturer.
- Firmware and region variants can affect available SMS commands and transport options; check the device firmware version before applying changes.
- Choose UDP or TCP on the device only if the configuration interface requires it; Plaspy accepts both and will detect the protocol automatically.
- Always verify the APN values with your mobile operator; incorrect APN settings prevent the device from opening a GPRS session.
- Keep a record of the device ID and computed SMS secret key for troubleshooting and future configuration.

## Why Use Plaspy with This Configuration

Using the Castel PT-690 with Plaspy provides a straightforward way to consolidate location and status reporting for portable pet tracking into a centralized platform. Pointing the PT-690 at the shared Plaspy server endpoint and port allows the tracker to send consistent updates to a single destination where you can view, alert, and analyze device activity across your account.

To learn more about Plaspy and how to manage trackers across fleets or personal devices visit https://www.plaspy.com. Device setup methods, firmware behavior, and specific manufacturer parameters can change over time, so verify the latest PT-690 configuration details on the manufacturer site http://www.castelecom.com/ before performing large scale deployments.
