---
slug: /lk_gps/lk960_4g/configuration
id: lk960_4g-configuration
sidebar_label: Configuration
title: LK-GPS - LK960-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for LK960-4G integration with Plaspy including server settings and practical setup steps for vehicle tracking
keywords:
  - LK GPS LK960 4G configuration
  - LK960 4G setup Plaspy
  - LK GPS server configuration
  - LK960 tracking software setup
  - vehicle tracker configuration Plaspy
  - LK960 GPS platform setup
  - Plaspy tracker integration
  - LK GPS deployment guide
  - fleet tracking configuration
  - LK960 telemetry setup
---

# LK-GPS - LK960-4G Configuration

This page covers the public configuration context for using the LK-GPS LK960-4G tracker with Plaspy. It summarizes the shared server settings and practical steps you will use to point the device at Plaspy for real time tracking and event reporting, while using the information in the LK960-4G product description as the functional baseline.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at connection time. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so this guide focuses on the public Plaspy settings and the practical workflow to apply them to the LK960-4G.

## Configuration Overview

Configuring the LK960-4G for Plaspy prepares the tracker to send location and event data to a single Plaspy endpoint so vehicles become visible and manageable from the platform. The process is generally limited to providing Plaspy server details, selecting the transport method the device supports, and validating that reports arrive in Plaspy.

- Point the tracker to the Plaspy endpoint so position and alarm messages are routed to the platform.
- Select TCP or UDP transport on the device where a transport selection is required.
- Enter the shared Plaspy port so the tracker and platform communicate on the same channel.
- Validate connectivity and correct IMEI or device ID so the unit appears in Plaspy.
- Confirm event reporting such as geofence, tamper, power loss, and immobilizer events are forwarded to the platform.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the LK960-4G. These values are shared across Plaspy supported devices.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device selection
- Plaspy automatically detects the tracker protocol when a device connects

## Typical Requirements Before Setup

- A powered and installed LK960-4G unit with vehicle wiring completed for continuous operation.
- Active cellular service and a compatible SIM card configured for data and SMS if SMS setup alternatives are required.
- Access to the official LK-GPS configuration method or software provided by the manufacturer or vendor.
- The tracker IMEI or device identifier noted for registering or confirming activity in Plaspy.
- A test plan to validate reports and event notifications inside Plaspy after configuration.
- Basic knowledge of whether your deployment will prefer UDP or TCP for transport.

## How This Tracker Connects to Plaspy

The LK960-4G sends periodic position updates and event driven alerts to the Plaspy server endpoint and port so vehicles and alarms become visible in the Plaspy platform. Once pointed at the shared Plaspy endpoint the device will open a connection using the chosen transport and Plaspy will identify the tracker protocol automatically.

- The device is configured to report to d.plaspy.com or 54.85.159.138 at port 8888.
- Use UDP or TCP as the transport option on the tracker if the device requires a transport choice.
- Plaspy receives location updates for live map display and historical trip recording.
- Event messages such as geofence, tamper, power loss, immobilizer activity, and overspeed are forwarded to Plaspy for alerts.
- Plaspy automatically detects the protocol and associates incoming data with the device IMEI or identifier.

## Common Configuration Workflow

1. Access the official LK-GPS configuration method or software provided by the manufacturer or installer.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the LK960-4G requires you to select a transport protocol.
5. Apply or save the configuration within the manufacturer tool or device interface.
6. Restart the device if the manufacturer tool or firmware requires a reboot for changes to take effect.
7. Validate that the device reports to Plaspy by checking that the IMEI appears and position updates and events are visible in the Plaspy platform.

## Example Configuration Commands

The exact commands and syntax for configuring an LK960-4G can vary by firmware and the manufacturer configuration tool. Because manufacturers provide different methods such as desktop software, mobile apps, or SMS commands, consult the LK-GPS configuration guide for device specific commands. In general you will be entering the Plaspy server values shown earlier, for example pointing server, port, and transport to Plaspy.

If you are using text based commands or SMS setup provided by the manufacturer the high level fields you will set are the same as above
- Server domain or IP set to d.plaspy.com or 54.85.159.138
- Server port set to 8888
- Transport set to UDP or TCP if required

Refer to the LK-GPS configuration manual for the exact command syntax and order required by the LK960-4G firmware.

## Configuration Notes

- Firmware differences across LK960-4G hardware revisions may change the exact menu names, SMS command syntax, or software UI fields used to set server and transport options.
- For installations where SMS remains available, SMS based queries and some SMS configuration commands are supported by the LK960-4G and can be used as an alternative to direct software configuration where documented by the manufacturer.
- TCP and UDP differ in behavior and reliability depending on mobile network conditions; choose the transport that matches your operational requirements and test under real network conditions.
- Always record the device IMEI or identifier as supplied by the manufacturer to speed up validation in Plaspy.
- Installer best practices include testing at least one device end to end with Plaspy before mass deployment.

## Why Use Plaspy with This Configuration

Using the LK960-4G with Plaspy provides centralized visibility of vehicle position, alarms, and telemetry so operations teams can monitor fleets, respond to incidents, and produce historical reports for maintenance and compliance. The LK960-4G wired design, wide input voltage support, multi GNSS reception, and platform friendly commands make it suited for continuous fleet deployments that need reliable real time tracking and anti theft controls.

To learn more about Plaspy and how Plaspy handles tracker connectivity and fleet management visit https://www.plaspy.com. For the latest device specific setup steps, firmware notes, and command syntax consult the manufacturer at https://www.lk-gps.com as device methods and firmware behavior can change over time.
