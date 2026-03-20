---
slug: /wanway/ev02/configuration
id: ev02-configuration
sidebar_label: Configuration
title: WanWay - EV02 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for WanWay EV02 tracking with Plaspy including server settings SMS commands and setup workflow for GPRS reporting
keywords:
  - WanWay EV02
  - WanWay EV02 configuration
  - WanWay EV02 setup
  - WanWay EV02 server configuration
  - Plaspy tracker setup
  - Plaspy configuration
  - EV02 GPS tracker
  - EV02 fleet management
  - WanWay GPS setup
  - vehicle tracking EV02
---

# WanWay - EV02 Configuration

This page documents the public configuration context for using the WanWay EV02 tracker with the Plaspy platform. It explains the shared Plaspy server settings used across supported devices and shows the practical, publicly available SMS commands for configuring the EV02 so it reports to Plaspy.

Plaspy uses shared server settings for all supported trackers and automatically detects the tracker protocol when devices connect. Manufacturer-side setup steps and exact command formats can vary by EV02 firmware version, hardware revision, installation type, and the configuration tool you use. The example commands below show one common SMS-based setup flow.

## Configuration Overview

The EV02 must be prepared to communicate with Plaspy so location, event, and status data arrive reliably on the platform. The configuration process focuses on setting the device APN, pointing the device to the Plaspy server endpoint, and enabling GPRS reporting so the unit appears in Plaspy dashboards.

- Configure the cellular APN so the EV02 can establish a GPRS data session.
- Point the tracker to Plaspy server d.plaspy.com and the shared Plaspy port so data is routed to your Plaspy account.
- Set reporting intervals and enable GPRS mode so the device sends regular updates to Plaspy.
- Verify the device configuration and status using the EV02 SMS query commands so you can confirm visibility on Plaspy.
- Validate the device in Plaspy after configuration to ensure events and location updates are received.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support for UDP or TCP (configure the tracker to use whichever transport the device requires)  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A SIM card with active voice/SMS and GPRS data service appropriate for the EV02 and the region of operation.  
- Ability to send and receive SMS from the installer or administration phone if using SMS-based configuration.  
- Access to the EV02 installation (power and wiring) so the device is powered and can attach to the network.  
- The official manufacturer configuration method or documentation for EV02 SMS commands or provisioning tools.  
- A Plaspy account or access to Plaspy platform to confirm the device appears after configuration.  
- Basic knowledge of APN credentials for your carrier to populate the APN placeholders.

## How This Tracker Connects to Plaspy

The EV02 connects to Plaspy by establishing a GPRS session and sending location and event data to the shared Plaspy server endpoint and port. Once the device is pointed to the Plaspy server and GPRS is enabled, Plaspy will receive telemetry, alarms, and status updates for display and processing.

- The device is configured to report to d.plaspy.com on port 8888 so all telemetry reaches the Plaspy endpoint.  
- Plaspy uses automatic protocol detection so the platform identifies the tracker protocol when the EV02 connects.  
- Location updates, alarm events, and status messages are forwarded to Plaspy for real-time monitoring and historical reporting.  
- Regular timer-based reporting ensures periodic position uploads to Plaspy for fleet visibility.  
- Installer verification and status queries help confirm the device is online and visible within Plaspy.

## Common Configuration Workflow

1. Access the official WanWay EV02 configuration method described by the manufacturer, typically SMS commands or the vendor provisioning tool.  
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.  
3. Set the device port to 8888, the shared Plaspy port used for all supported devices.  
4. Choose UDP or TCP transport on the device if it requires explicit transport selection.  
5. Configure the carrier APN and any APN credentials required for GPRS connectivity.  
6. Apply or save the configuration and restart the tracker if the firmware requires a reboot to apply changes.  
7. Validate that the device reports to Plaspy by checking the device status on the platform and using SMS status queries if available.

## Example Configuration Commands

The EV02 supports SMS-based configuration. Send these commands from an authorized phone number to the device in the order shown. Preserve placeholders such as {{apn}}, {{apnu}}, and {{apnp}} and replace them with your carrier values when sending.

- Configure the carrier APN (replace placeholders with your carrier values):
```
APN,{{apn}}#
```
If your carrier requires username and password, include them:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
- Set the GPRS server to Plaspy (server entry 1 pointing to d.plaspy.com on port 8888):
```
SERVER,1,d.plaspy.com,8888,0#
```
- Set up the reporting interval (example sets timer values to 60 seconds):
```
TIMER,60,60#
```
- Switch on GPRS reporting mode:
```
GPRSON,1#
```
- Check current configuration parameters:
```
PARAM#
```
- Query tracker status:
```
STATUS#
```

Notes on placeholders:
- {{apn}} is the carrier APN string required to open a GPRS session.  
- {{apnu}} and {{apnp}} are optional APN username and password fields when the carrier requires credentials.

## Configuration Notes

- The exact SMS command syntax and parameter order can vary by EV02 firmware version; consult the manufacturer documentation if a command does not respond as expected.  
- SMS-based configuration is a common public method for EV02 devices; some installers use vendor tools or provisioning services instead.  
- Choosing TCP versus UDP may depend on firmware support and reliability in your network; Plaspy accepts either transport and will detect the protocol automatically.  
- Plaspy uses the same port 8888 across devices, simplifying server configuration when deploying multiple tracker models.  
- Verify APN settings and test data connectivity before relying on timed reporting for critical alerts.

## Why Use Plaspy with This Configuration

Configuring the WanWay EV02 to report to Plaspy provides a practical, field-proven path to real-time vehicle visibility, alarm handling, and remote immobilizer workflows. For fleets that need compact hardware with anti-theft features and straightforward configuration, pairing EV02 hardware with Plaspy gives operators centralized telemetry, event notifications, and access to historical location data for operational oversight.

To learn more about Plaspy and how the platform works with devices like the EV02 visit https://www.plaspy.com. For the most current device-specific commands, firmware notes, and detailed installation instructions consult the manufacturer website at https://www.wanwaytech.net/ as device behavior and setup methods can change with firmware and hardware revisions.
