---
slug: /tk_star/pet_tracker/configuration
id: pet_tracker-configuration
sidebar_label: Configuration
title: TK-Star - Pet Tracker Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the TK-Star Pet Tracker for use with Plaspy including server settings and SMS commands
keywords:
  - TK-Star Pet Tracker configuration
  - TK-Star Pet Tracker setup
  - Pet Tracker server configuration
  - Plaspy device configuration
  - GPS tracker setup guide
  - tracker SMS commands
  - GPRS server settings
  - tracker protocol detection
  - TK-Star APN configuration
  - GPS platform setup
---

# TK-Star - Pet Tracker Configuration

This page covers the public configuration context for using the TK-Star Pet Tracker with Plaspy. It gathers the practical settings and SMS commands commonly used to point the device at Plaspy so the tracker can report location and status to the platform. The content here focuses on public, practical configuration steps and does not replace the official user manual.

Plaspy uses a shared server endpoint and port for supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. Where applicable this page includes sample SMS commands provided by the manufacturer and explains placeholders such as APN parameters so you can adapt them to your operator settings.

## Configuration Overview

This configuration process prepares the TK-Star Pet Tracker to communicate with the Plaspy platform so location updates and events appear in your Plaspy account. The key action is directing the device to the Plaspy server endpoint and confirming the device can send data over the network.

- Configure the device to use Plaspy as its GPRS server endpoint so reports are forwarded to the platform.
- Supply correct APN, APN username, and APN password values for the SIM card in the device.
- Set an appropriate upload interval so location updates are sent at the required reporting frequency.
- Optionally restore factory defaults or reset if you need a clean configuration state.
- Validate that the device is reporting to Plaspy by checking device visibility and last seen time in the platform.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP (the device may be configured to use either UDP or TCP on port 8888)  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged TK-Star Pet Tracker with an active SIM card installed as noted in the device documentation.
- Knowledge of the SIM operator APN, and if required the APN username and APN password.
- Access to the device configuration method provided by the manufacturer, commonly SMS or the vendor app.
- The device default password if SMS commands require authentication (manufacturer default shown in examples below).
- A phone capable of sending SMS messages to the device SIM for SMS based configuration.
- Patience to allow time for the device to register to the mobile network and establish a GPRS connection.

## How This Tracker Connects to Plaspy

The TK-Star Pet Tracker is configured to send its location and status to the shared Plaspy server endpoint and port over the device data connection. Once the device is pointed to the Plaspy endpoint and GPRS mode is enabled, Plaspy will receive updates and automatically determine the correct protocol.

- The tracker reports to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Data transport can be TCP or UDP depending on device selection and network conditions.
- Plaspy automatically detects the tracker protocol so no manual protocol mapping is required on the Plaspy side.
- The device sends periodic upload messages based on the configured upload interval so location updates appear in Plaspy.
- Event notifications such as geofence alerts or low battery are forwarded to the platform once the device is connected.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the TK-Star Pet Tracker, commonly SMS command interface or the vendor app.
2. Enter the Plaspy server endpoint by using either the domain d.plaspy.com or the IP address 54.85.159.138 in the device server settings.
3. Set the server port to 8888, remembering that Plaspy uses the same port for all devices.
4. Choose UDP or TCP if the device requires a transport selection; either is supported and Plaspy will handle protocol detection.
5. Configure the device APN, username, and password so the SIM can establish a GPRS connection.
6. Apply or save the configuration on the device and restart the tracker if the device requires it for new settings to take effect.
7. Validate that the device reports to Plaspy by checking device visibility and recent location reports in the platform.

## Example Configuration Commands

The following SMS commands are the public example set provided by the manufacturer for this model. The device default password in these examples is 123456. Send each command as a single SMS message to the tracker's SIM number. Preserve and replace placeholders where indicated.

- Optional initial reset to factory defaults (only when you need a fresh start):

```
begin123456
```

- Set the operator APN (replace {{apn}} with your carrier APN):

```
apn123456 {{apn}}
```

- Set the APN username if your operator requires it (replace {{apnu}} with your APN username):

```
apnuser123456 {{apnu}}
```

- Set the APN password if your operator requires it (replace {{apnp}} with your APN password):

```
apnpasswd123456 {{apnp}}
```

- Set the GPRS server to Plaspy using the public IP and port 8888:

```
adminip123456 54.85.159.138 8888
```

- Set the upload interval to 60 seconds (adjust as needed):

```
upload123456 60
```

- Switch the device to GPRS mode so it uses the data connection:

```
gprs123456
```

Notes on placeholders and commands:
- {{apn}} is the mobile operator APN string required for GPRS data.
- {{apnu}} and {{apnp}} are optional APN username and password placeholders if your carrier requires them.
- The default device password used in these examples is 123456. Replace the password in each SMS if you have changed it on the device.

## Configuration Notes

- SMS based configuration is supported in the public commands above; the exact SMS format can vary by firmware version so confirm syntax with the manufacturer if commands are rejected.
- Different firmware revisions or hardware variants can alter available commands or default passwords; check the device label and documentation before bulk configuration.
- The device can be set to use either TCP or UDP transport on port 8888; test both if connectivity issues occur because network operators sometimes prefer one transport.
- Plaspy uses a single shared port for all devices and automatically detects the tracker protocol when the device connects.
- APN values and mobile carrier settings vary by market and SIM card; use the correct APN details for the SIM in the tracker.

## Why Use Plaspy with This Configuration

Using the TK-Star Pet Tracker with Plaspy provides a straightforward way to centralize location reporting, visibility, and event monitoring. Pointing the tracker to the Plaspy endpoint lets organizations and pet owners consolidate tracking data in one platform for live view, historical playback, and operational oversight.

To learn more about Plaspy and supported device configuration options visit https://www.plaspy.com. Please verify device specific configuration methods, firmware behavior, and manufacturer details on the official TK-Star website https://www.tk-star.com/ as manufacturer specifications and setup steps can change over time.
