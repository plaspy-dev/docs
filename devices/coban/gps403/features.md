---
slug: /coban/gps403/features
id: gps403-features
sidebar_label: Features
title: Coban - GPS403 Features
sidebar_class_name: menu_item_tracker
description: Public feature guide for the Coban GPS403 tracker and how its tracking and alarm functions work with Plaspy
keywords:
  - Coban GPS403 features
  - Coban GPS403 GPS tracker
  - GPS403 capabilities
  - GPS403 functions
  - Coban tracker Plaspy compatibility
  - vehicle tracking GPS403
  - GPS403 geo fence
  - GPS403 SOS alarm
  - GPS403 LBS address
  - GPS403 remote cut off
---

# Coban - GPS403 Features

This page provides a public overview of the Coban GPS403 features and how those features are typically used with Plaspy. It summarizes the tracker capabilities that are relevant for location monitoring, event visibility, and remote management when a GPS403 is configured to report into the Plaspy platform.

Exact feature availability can vary by firmware version, hardware revision, regional model, and the details of each installation. Manufacturer implementation and local service provider setup also affect behavior, so the descriptions below are intended as general, non exhaustive guidance based on the GPS403 public feature set.

## Feature Overview

The GPS403 is a multi band GSM GPRS and WCDMA capable tracker that uses GPS satellite positioning combined with location based service to provide street level addresses and flexible tracking modes. It supports a broad set of alarm and control functions designed for vehicle and asset monitoring and can be configured remotely via SMS or internet reporting.

- Multi band cellular connectivity for broad regional coverage and data reporting
- GPS satellite positioning plus LBS for human readable street addresses
- Multiple tracking options including single locate, continuous auto track, and position updates on vehicle turns
- A range of alarm types including geo fence alerts, overspeed, movement alarm, GPS blind spot warning, low battery alert, and SOS
- Remote control capability including cutting off oil and power system when supported by the installed unit
- Configurable commands and settings via SMS or internet for flexible deployments

## Core Features of Coban - GPS403

- GPS satellite based positioning for real time location tracking
- Location Based Service that can provide street level address information
- Multi band cellular support for GSM GPRS and WCDMA 3G networks
- Flexible tracking modes: single locate, continuous auto tracking, and automatic updates when the vehicle turns
- GPS drift suppression to improve positional stability
- Alarm functions including low battery alarm, GPS blind spot alert, SOS alarm, geo fence alarm, movement alarm, and over speed alarm
- Remote cut off of oil and power system for additional vehicle control where hardware and installation support it
- Remote configuration features such as change password, authorization, message forwarding, and charge inquiry via SMS or internet

## How These Features Work with Plaspy

Plaspy receives reported locations and event messages from compatible trackers and presents those inputs as live map positions, events, and historical routes. When a GPS403 is pointed to the Plaspy server and reporting, Plaspy will surface the device locations and alarms so operators can monitor and respond.

- Live map display of GPS reported position and LBS derived address when available
- Event logging and notifications for alarms like geo fence, overspeed, movement, low battery, GPS blind spot, and SOS
- Historical route playback and reporting based on the tracker position updates and tracking mode
- Remote command transmission where the device and installation support remote control actions such as engine or power cutoff
- Automatic protocol detection and standardized device handling inside Plaspy to simplify onboarding of compatible trackers
- Centralized visibility of device state and event history for operational oversight

## Typical Use Cases

- Fleet vehicle location monitoring and route tracking for operations teams
- Theft response and recovery workflows that use location reports and remote immobilization
- Delivery and logistics visibility with continuous or turn triggered position updates
- Asset tracking for high value equipment that benefits from geo fence and movement alarms
- Personal or vulnerable asset monitoring using SOS and movement alerts
- Compliance reporting and historical route analysis for operational audits

## Feature Availability Notes

- Features such as alarms and remote cut off depend on the installed hardware revision and wiring or accessory configuration at installation
- Firmware differences and regional model variants can change available tracking modes, alarm names, and command sets
- Cellular network support and behavior depend on local mobile providers and a valid SIM data plan for GPRS or 3G reporting
- LBS address accuracy varies by available cellular towers and network operator data
- Manufacturer documentation provides the definitive command list and configuration details for SMS and internet control

## Why Use Plaspy with These Features

Using the Coban GPS403 with Plaspy gives organizations consolidated visibility into locations, alerts, and historical movements from devices that report over standard mobile networks. Plaspy presents events and position data in a single operational view so teams can monitor assets, receive timely notifications, and act on alarms generated by the tracker.

To learn more about Plaspy and how the platform can receive and manage Coban GPS403 devices, visit https://www.plaspy.com. For the most current device specific details, firmware notes, and manufacturer instructions please verify with the official Coban product documentation at https://www.coban.net/ as device features and firmware behavior can change over time.
