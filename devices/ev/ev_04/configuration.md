---
slug: /ev/ev_04/configuration
id: ev_04-configuration
sidebar_label: Configuration
title: EV - EV-04 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EV EV-04 showing Plaspy server settings and SMS commands required for basic setup and integration
keywords:
  - EV EV-04 configuration
  - EV-04 setup Plaspy
  - EV EV-04 server configuration
  - EV-04 GPS tracker setup
  - EV personal tracker configuration
  - Plaspy tracker configuration
  - EV-04 SMS setup commands
  - EV-04 APN settings
  - personal GPS pendant setup
  - GPS tracker Plaspy integration
---

# EV - EV-04 Configuration

This page documents the public configuration context for using the EV-04 personal GPS tracker with Plaspy. It focuses on the practical, manufacturer-visible steps and the shared Plaspy server values required to get an EV-04 reporting location and events to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tooling. The EV-04 supports SMS-based configuration in public documentation; the sample manufacturer commands below show the default device password and the SMS syntax used to set time zone, APN, and server target when server change is enabled.

## Configuration Overview

This configuration process prepares an EV-04 to communicate with Plaspy so the device can deliver location, SOS and telemetry to a centralized monitoring instance. The goal is to ensure the device has network connectivity, correct APN, and a server endpoint set to the Plaspy shared server and port.

- Configure device APN and verify mobile connectivity so the tracker can reach the internet.
- Set the device time zone and local clock to ensure timestamps match Plaspy event logs.
- Point the tracker at Plaspy using the shared server endpoint and port so the platform receives location and SOS events.
- Save or apply settings and restart the tracker if required to initiate reporting.
- Validate the device is visible and reporting in Plaspy after setup.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged EV-04 with working SIM and active mobile service for data and SMS where required.
- Access to a phone capable of sending SMS commands (the EV-04 public configuration supports SMS-based commands).
- The default device password (manufacturer sample uses 123456) or the current device password if it was changed.
- Manufacturer configuration instructions or support contact to enable server change if the device has that option disabled by default.
- A basic understanding of APN settings for the mobile operator that the device will use.

## How This Tracker Connects to Plaspy

The EV-04 is configured to report location and events to the shared Plaspy server endpoint and port so Plaspy can ingest real-time telemetry and SOS alerts. Once the device is pointed at the Plaspy endpoint and has mobile connectivity, Plaspy receives position updates and event notifications for monitoring and alerting.

- Device sends periodic location updates to d.plaspy.com (or the Plaspy IP) on port 8888 using the chosen transport.
- SOS events and fall detection alerts are delivered to Plaspy for immediate processing and notification routing.
- Two-way call and event status changes are logged in Plaspy for auditing and follow-up.
- Plaspy automatically detects the device protocol so explicit protocol selection is often not necessary on the server side, but the device may still require a transport choice (UDP or TCP).

## Common Configuration Workflow

1. Access the official EV manufacturer configuration method or software; for EV-04 this can include SMS commands documented by the manufacturer or vendor tools.
2. Ensure the device has a valid SIM with operator APN configured and the device battery is charged.
3. Enter the Plaspy server endpoint by using d.plaspy.com or the server IP 54.85.159.138 in the device configuration.
4. Set the port to 8888 (Plaspy uses the same port for all devices).
5. Choose UDP or TCP on the device if a transport selection is required; the device may be configured using UDP or TCP on port 8888.
6. Apply or save the configuration and restart the device if the device or firmware requires a reboot to start reporting.
7. Validate that the EV-04 reports to Plaspy and appears in the platform with correct timestamped updates.

## Example Configuration Commands

The EV manufacturer documents SMS-based setup for EV-04. The sample commands below use the device default password 123456 as shown in public manufacturer content. Note that the manufacturer indicates that changing the server target may require contacting them to enable the option first.

- Set the time zone to UTC+0
```text
123456L+00
```

- Set the operator APN (replace {{apn}}, and include {{apnu}} and {{apnp}} if your operator requires username and password)
```text
123456S1,{{apn}},{{apnu}},{{apnp}}
```
Explanation: {{apn}} is the mobile operator APN. {{apnu}} and {{apnp}} are optional APN username and password placeholders used only if your operator requires them.

- Set the server IP and port to Plaspy (manufacturer note: you may need to request server change enablement from the manufacturer)
```text
123456I1,54.85.159.138,8888
```
Notes:
- The manufacturer sample shows the numeric server IP and port. You can also use the domain d.plaspy.com where the device supports hostnames.
- The device may require the manufacturer to enable server change before the I1 command will take effect.

## Configuration Notes

- SMS-based configuration is supported in the public commands shown; confirm the device in-hand uses the same SMS command set and default password before sending commands.
- Firmware or hardware revisions may change command syntax or default passwords; verify against the manufacturer documentation or support.
- Choose UDP or TCP according to your device's configuration menu; Plaspy will accept either transport on port 8888 and will automatically detect the correct protocol.
- Confirm APN values with your mobile operator and preserve placeholders {{apn}}, {{apnu}}, and {{apnp}} as shown when applicable.
- Contact the manufacturer or vendor if the device does not accept server changes; some units require an enablement step or dealer activation.

## Why Use Plaspy with This Configuration

Using the EV-04 with Plaspy brings centralized visibility for personal safety devices, enabling monitoring centers and caregivers to receive timely location updates, SOS alerts, and event logs. Plaspy’s shared server approach simplifies device provisioning because all supported devices report to the same port and Plaspy handles protocol detection on the backend.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device-specific configuration details, firmware behavior, and manufacturer instructions at the official EV website http://www.eviewltd.com/. Device configuration steps and manufacturer options can change over time so always confirm current guidance with the manufacturer.
