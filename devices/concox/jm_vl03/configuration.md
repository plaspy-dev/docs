---
slug: /concox/jm_vl03/configuration
id: jm_vl03-configuration
sidebar_label: Configuration
title: Concox - JM-VL03 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox JM-VL03 with Plaspy server settings SMS commands and setup guidance for integration
keywords:
  - Concox JM-VL03 configuration
  - JM-VL03 setup
  - Concox GPS tracker setup
  - Plaspy tracker configuration
  - GPS tracker SMS commands
  - vehicle tracking setup
  - fleet management tracker
  - JM VL03 server configuration
  - Concox telemetry configuration
  - Plaspy device integration
---

# Concox - JM-VL03 Configuration

This page documents the public configuration context for using the Concox JM-VL03 tracker with Plaspy. It gathers the Plaspy server settings, common preparation steps, and the manufacturer SMS commands that are publicly available for configuring the device to report to the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side steps can vary by firmware, hardware revision, installation type, or vendor tools. The example SMS commands below are the publicly available instructions for the JM-VL03 and show the practical steps to point the device at Plaspy.

## Configuration Overview

This configuration process prepares a JM-VL03 to communicate reliably with the Plaspy platform so location and event data appear in your Plaspy account. The objective is to set network parameters, server endpoint and reporting behavior so the tracker streams telemetry to Plaspy in near real time.

- Configure the tracker GPRS and server parameters so it reports to Plaspy server endpoints.
- Set the correct APN for the installed SIM card so cellular data is functional.
- Define reporting intervals or timers to control how often updates are sent to Plaspy.
- Validate connectivity and use a verification command to confirm the tracker is pointing to Plaspy.
- Enable GPRS or data mode and apply saved settings so reporting begins to the platform.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the JM-VL03. Plaspy uses the same reporting port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (the device may be configured for either transport on port 8888)
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A valid Micro SIM card with an active data plan and the carrier APN values for the SIM.
- Power to the JM-VL03 and access to the device SMS number for sending configuration messages.
- Access to official manufacturer configuration instructions or installer tools as distributed by Concox or authorized vendors.
- Knowledge of the correct APN and any APN username or password required by the cellular operator.
- A checklist for testing such as verifying LED status, GPS fix availability, and device reporting in Plaspy after configuration.

## How This Tracker Connects to Plaspy

The JM-VL03 is configured to use cellular data to send position and event telemetry to the Plaspy server endpoint and port. Once the tracker has a working APN and server configured, it will initiate connections to the Plaspy server and Plaspy will ingest the protocol data automatically.

- The tracker sends periodic location updates and event-driven messages to the Plaspy server endpoint.
- Telemetry and event alerts become visible in Plaspy dashboards and can trigger rules and notifications.
- The device reports to the shared Plaspy server endpoint using port 8888.
- You can configure the device to use either UDP or TCP transport if the device requires a transport choice.
- Plaspy detects the tracker protocol so no protocol selection is required in the platform when the device connects.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software, or prepare to send SMS configuration commands as provided by the manufacturer.
2. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device reporting port to 8888.
4. Choose UDP or TCP transport if the device requires transport selection; Plaspy accepts both and auto-detects the tracker protocol.
5. Set the carrier APN and any optional APN username or password required by your SIM.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy and appears in the platform using the verification command or by checking live data in Plaspy.

## Example Configuration Commands

The JM-VL03 can be configured by sending SMS commands to the device. The following commands are the publicly documented SMS commands for basic setup. Send each command as an SMS to the device and wait for an acknowledgment per the device behavior. Keep the order shown for initial setup when applicable.

- Optional initial factory reset (use only if you need a clean configuration):
```text
FACTORY#
```

- Set the time zone to UTC 0 (example timezone command):
```text
GMT,E,0#
```

- Set the operator APN. Replace {{apn}} with your carrier APN. If your operator uses an APN username or password include {{apnu}} and {{apnp}} respectively.
```text
APN,{{apn}}#
```
Or with username and password:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
(Placeholders: {{apn}} = APN name, {{apnu}} = APN username, {{apnp}} = APN password)

- Set the GPRS server using the Plaspy domain and port:
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Alternatively set the GPRS server using the Plaspy server IP and port:
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval (example sets updates every 60 seconds). Two formats may be accepted:
```text
TIMER,60#
```
Or:
```text
TIMER,60,60#
```

- Enable GPRS mode so the device uses cellular data:
```text
GPRSON,1#
```

- Verify current GPRS and server related parameters:
```text
GPRSSET#
```

Notes on commands:
- Send each line as a separate SMS to the device phone number.
- Maintain the order for initial setup: APN first, then server and timers, then enable GPRS.
- The SERVER command examples show both the domain and IP options for Plaspy and both reference port 8888. The device may accept either form.
- Plaspy supports both UDP and TCP on port 8888; configure the JM-VL03 to the transport type required by your environment if the device asks for transport selection.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available options; always confirm with the latest Concox documentation.
- The device supports configuring server by domain or IP. Using d.plaspy.com is recommended for flexibility, while the server IP is provided as an alternative.
- Choose UDP or TCP based on installer preference or device capability; Plaspy accepts both and its platform auto-detects the protocol on connect.
- SMS based setup is a common and practical method for JM-VL03 installations; ensure the SIM can receive SMS and has data enabled for GPRS steps.
- Timer and reporting interval behavior can affect data usage and battery/back up behavior; pick intervals that balance reporting needs and data consumption.

## Why Use Plaspy with This Configuration

Using the JM-VL03 with Plaspy gives fleet managers and asset protection teams a straightforward path to real time tracking, event alerts, and telemetry-driven workflows. Configuring the device to point to Plaspy using the shared server settings makes the tracker visible in Plaspy maps, rule engines and reporting tools so organizations can monitor location, ignition status, driver behavior events and anti-theft actions.

Learn more about Plaspy and how your fleet can use these integration capabilities at https://www.plaspy.com. For the latest device specific configuration commands, firmware notes and installation guidance verify the most current information on the manufacturer site https://www.iconcox.com/ as methods and firmware behavior can change over time.
