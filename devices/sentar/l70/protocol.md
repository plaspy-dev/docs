---
slug: /sentar/l70/protocol
id: l70-protocol
sidebar_label: Protocol
title: Sentar - L70 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for the Sentar L70 tracker and how it communicates with the Plaspy platform
keywords:
  - Sentar L70 protocol
  - Sentar L70 GPS protocol
  - Sentar L70 Plaspy compatibility
  - Sentar L70 communication protocol
  - Sentar L70 tracking protocol
  - Sentar GPS tracker protocol
  - Sentar L70 device integration
  - Plaspy device compatibility
  - Fleet tracking Sentar L70
  - Vehicle tracking Sentar L70
---

# Sentar - L70 Protocol

This page describes the public protocol context for using the Sentar L70 GPS tracker with the Plaspy platform. It focuses on how the device communicates at a high level, what connection settings are used with Plaspy, and what to consider when integrating the tracker for location reporting and monitoring.

The Sentar L70 combines GPS, AGPS, LBS, and WiFi positioning and uses an MTK2503 chipset for location tasks. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact behavior and available reporting options can vary with firmware version, hardware revision, or manufacturer configuration, so the details below are intentional high level and non sensitive.

## Protocol Overview

The communication protocol for the L70 defines how the device reports location, status, and events to a remote server and how the platform can identify and interpret those reports. When used with Plaspy the protocol provides the data necessary for positioning, time stamps, and basic device state, while Plaspy handles interpretation and storage.

- Enables the device to send periodic location updates and event driven reports to the platform
- Allows the tracker to identify itself so Plaspy can associate incoming messages with the correct device record
- Carries telemetry such as position, time and basic status that Plaspy converts to usable location data
- Supports both real time reporting and status reporting depending on device configuration and firmware
- Works with Plaspy so incoming device messages are accepted and processed without requiring manual protocol selection

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared public endpoint and automatically identifies the tracker protocol so end users typically do not need to select a protocol manually. Proper device configuration to report to the Plaspy endpoint is the usual requirement for successful automatic detection.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP is 54.85.159.138 and the established platform port is 8888
- Plaspy uses the same port for all supported devices which simplifies deployment
- When an L70 is configured to report to the Plaspy endpoint the platform will auto detect the protocol and ingest data
- Manual protocol selection inside Plaspy is generally unnecessary if the device is correctly pointed at the Plaspy endpoint

## Transport and Connection Context

Connection transport and addressing determine how the L70 reaches the Plaspy platform. The device may be configured to use either UDP or TCP depending on the hardware, SIM operator, and firmware configuration. For Plaspy the key connection details are consistent across device types.

- Devices may use UDP or TCP transport on port 8888 depending on device support and configuration
- Trackers can be pointed to the Plaspy reporting endpoint using the domain d.plaspy.com or the IP address 54.85.159.138
- Plaspy uses the same port for all devices making firewall and network setup predictable
- Confirm device APN, network operator settings, and transport selection when provisioning an L70 to ensure network connectivity
- Network conditions and operator policies can influence whether UDP or TCP is preferable for reliable reporting

## Protocol Compatibility Notes

- Firmware revisions can change how the L70 reports certain fields or which reporting modes are available
- Hardware revisions and optional features may affect supported transports or sensors used in reports
- Manufacturer side settings or custom configurations can modify default reporting intervals or event triggers
- Choose UDP or TCP based on network reliability and operator restrictions for best results
- Validate compatibility and recommended settings against official manufacturer documentation before large scale deployment
- Ensure SIM APN and network settings match the device configuration and operator requirements

## Why Protocol Understanding Matters

Understanding the L70 communication protocol and the general reporting behavior helps with a smoother integration into Plaspy, more effective troubleshooting, and better long term reliability of location data for operational use.

- Speeds up initial setup by confirming the device is pointed at d.plaspy.com or 54.85.159.138 on port 8888
- Helps identify whether transport selection UDP or TCP is the cause of intermittent reports
- Guides firmware update decisions when new releases modify reporting or power behavior
- Aids in interpreting device behavior during network outages or when devices enter low power modes
- Reduces trial and error when validating device reporting and expected telemetry

## Why Use Plaspy with This Protocol

Using the Sentar L70 with Plaspy provides a straightforward path to centralize location data, alerts, and monitoring for fleets or assets. The L70 multi mode positioning helps deliver useful location information in varied environments, and Plaspy’s platform is designed to accept device reports on a single shared endpoint to streamline deployment.

If you want to learn more about how Plaspy handles supported trackers and to review platform capabilities visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer guidance verify information on the Sentar website http://www.sentarsmart.com/ since protocol support and firmware behavior can change over time.
