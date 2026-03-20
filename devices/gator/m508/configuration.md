---
slug: /gator/m508/configuration
id: m508-configuration
sidebar_label: Configuration
title: Gator - M508 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Gator M508 GPS tracker showing Plaspy server settings and example SMS commands for integration
keywords:
  - Gator M508 configuration
  - Gator M508 setup
  - Gator M508 Plaspy
  - Gator GPS tracker configuration
  - M508 SMS setup
  - M508 GPRS configuration
  - fleet tracker setup
  - GPS tracker server settings
  - vehicle tracking setup
  - Plaspy tracker configuration
---

# Gator - M508 Configuration

This page documents the public configuration context for using the Gator M508 tracker with the Plaspy platform. It focuses on the practical, public settings needed to point the device at Plaspy and includes example SMS command templates provided by the manufacturer. Use this page to understand the server settings and a typical workflow to integrate the M508 with Plaspy for fleet visibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The M508 supports SMS and GPRS reporting methods, and the examples below show how to apply the public Plaspy settings using the device's SMS configuration flow.

## Configuration Overview

The configuration process prepares the tracker to communicate with Plaspy and to be visible in the platform. When configured correctly the device will send location and event data to Plaspy so you can monitor vehicles and receive alerts.

- Point the tracker at the Plaspy server endpoint to enable platform connectivity.
- Configure the device APN and server settings so GPRS reporting can reach Plaspy.
- Validate connectivity by confirming the device registers and reports to the shared Plaspy endpoint.
- Use SMS or the manufacturer tool as provided to send configuration commands to the M508.
- Ensure correct device ID and user contact details are set so Plaspy can associate the device with your account.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP supported on the device when selecting transport to the server  
- Plaspy automatically detects the tracker protocol when the device connects

Note that Plaspy uses the same port for all supported devices and will attempt protocol detection automatically.

## Typical Requirements Before Setup

- Ensure the M508 has a working power source and is powered on.  
- Confirm the device can use SMS or GPRS according to the installer method you plan to use.  
- Have the SIM card and APN details available if configuring GPRS reporting.  
- Know the device ID (tracker IMEI or device identifier) to include in configuration where required.  
- Have the phone number you will use for SMS configuration or for receiving alerts.  
- Access to the official manufacturer configuration method such as SMS commands or vendor software.

## How This Tracker Connects to Plaspy

The M508 can be configured to send data to Plaspy by directing its reporting to the shared Plaspy server endpoint and port. Once the device is pointed at the server, Plaspy will detect the protocol and allow the device to appear in the platform for monitoring.

- The tracker is configured with the Plaspy server domain or IP so GPRS packets are sent to Plaspy.  
- Port 8888 is used as the destination port for tracker communication to Plaspy.  
- The device may use UDP or TCP transport depending on device settings and network conditions.  
- Plaspy automatically detects the tracker protocol when the device connects to the platform.  
- After successful setup the device will report location and event data to Plaspy for visibility and alerts.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or vendor software and review the provided SMS templates and instructions.  
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.  
3. Set the device port to 8888, which Plaspy uses for all supported devices.  
4. Choose UDP or TCP transport if the device requires a transport selection during configuration.  
5. Provide APN and any credential placeholders required by the device, replacing placeholders such as [apn] with your SIM APN.  
6. Apply or save the configuration and send the SMS commands if using SMS based setup.  
7. Restart the device if required by the manufacturer to apply new settings.  
8. Validate that the device reports to Plaspy by confirming it appears in your Plaspy account and is sending location updates.

## Example Configuration Commands

The Gator M508 manufacturer sample uses SMS commands to set the GPRS server and includes a default device password of 123456. Two public SMS templates exist depending on whether APN username and password values are required.

1) Template when APN username and password are required
```
SS,*[apn]*,*[apnu]*,*[apnp]*,*54.85.159.138*,*8888*,*{{DeviceID}}*,*{{phoneNumberUser}}*,*123456*
```

2) Template when only APN is required
```
S,*[apn]*,*54.85.159.138*,*8888*,*{{DeviceID}}*,*{{phoneNumberUser}}*,*123456*
```

Notes on placeholders
- [apn] — your SIM card APN name.  
- [apnu] — APN username if required by your mobile operator.  
- [apnp] — APN password if required by your mobile operator.  
- {{DeviceID}} — the tracker device identifier, commonly the IMEI.  
- {{phoneNumberUser}} — the phone number to associate for alerts or admin SMS.  
- 123456 — the sample device password shown in the manufacturer example and the default password included in the sample command. Replace with the device password in use if different.

Send the appropriate SMS from an authorized number to the M508. After sending, allow the device time to register on the network and for Plaspy to detect the incoming connection.

## Configuration Notes

- The M508 supports SMS based configuration as shown in the manufacturer sample; use SMS only from authorized admin numbers.  
- Firmware versions and vendor tools may change the exact command syntax or available fields; always verify against current manufacturer guidance.  
- If the device or operator requires explicit transport selection, choose UDP or TCP according to network reliability and your operator recommendations.  
- Use the server domain d.plaspy.com or the IP 54.85.159.138 and port 8888 exactly as provided to ensure Plaspy receives reports.  
- Keep device credentials and phone numbers accurate when populating placeholders to avoid registration issues.

## Why Use Plaspy with This Configuration

Configuring the Gator M508 to report to Plaspy gives fleet operators a consistent endpoint for device visibility, location updates, and event monitoring. With Plaspy automatically detecting the tracker protocol and a shared server configuration, onboarding devices like the M508 becomes a predictable process that supports operations and security use cases.

To learn more about Plaspy and supported tracker integrations visit https://www.plaspy.com. Please verify the latest device specific setup details and any firmware notes with the manufacturer at http://en.gatorgroup.cn because manufacturer specifications and configuration methods can change over time.
